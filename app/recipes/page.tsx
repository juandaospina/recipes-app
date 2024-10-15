import RecipesTable from "app/app/ui/recipes/table";
import { montserrat } from 'app/app/ui/fonts'

export default async function Page(
  { searchParams }: { 
    readonly searchParams: { 
      difficulty?: string, 
      limit?: string,
      skip?: string
    }
  }
) {
  console.log(searchParams)

return (
  <div className="w-full">
    <div className="flex w-full items-center justify-between">
      <h1 className={`${montserrat.className} text-2xl`}>Resetas</h1>
    </div>
    <RecipesTable difficulty={searchParams.difficulty}/>
  </div>
);
}