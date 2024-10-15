import { Recipes } from "../types";
import axiosInstance from "../utils/axiosInstance";

const getRecipes = async  (difficulty?: string) => {
  const { data } = await axiosInstance.get<Recipes>(`/recipes`)

  const filteredRecipes = data.recipes.filter((recipe) => {
    return recipe.difficulty == difficulty
  })

  return difficulty ? filteredRecipes : data.recipes;
}

export default getRecipes;