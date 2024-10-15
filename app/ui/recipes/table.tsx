// import Image from 'next/image';
'use client'

import { useEffect, useState } from 'react';

import RecipeDifficulty from 'app/app/ui/recipes/status';

import { Recipe } from 'app/app/types'
import getRecipes from 'app/app/data/recipes';

export default function RecipesTable(
  { difficulty }: { readonly difficulty?: string }
) {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  
  useEffect(() => {
    async function getFilteredRecipes() {
      const filtered = await getRecipes(difficulty);
      setRecipes(filtered);
    } 
    getFilteredRecipes();
  }, [difficulty])

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{recipe.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{recipe.cuisine}</p>
                  </div>
                  <RecipeDifficulty status={recipe.difficulty} />
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nombre receta
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cocina
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Dificultad
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cantidad
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Calificación
                </th>
              </tr>
            </thead>
            <tbody className="bg-white" >
              {recipes.map((recipe) => (
                <tr
                  onClick={() => console.log(recipe.id)}
                  //style={{ border: '1px solid red' }}
                  key={recipe.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{recipe.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {recipe.cuisine}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <RecipeDifficulty status={recipe.difficulty} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {recipe.servings}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {recipe.rating}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
