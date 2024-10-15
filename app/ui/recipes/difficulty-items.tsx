'use client'

import { 
  usePathname, 
  useRouter, 
  useSearchParams 
} from 'next/navigation';

import { Difficulty } from 'app/app/types'

const difficultyItems = [
  { 
    name: 'Fácil',
    difficulty: Difficulty.Easy
  },
  {
    name: 'Dificultad media',
    difficulty: Difficulty.Medium
  }
];

export default function DifficultyItems() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleDifficultySearch = (difficulty: string) => {
    const params = new URLSearchParams(searchParams)
    if (difficulty) {
      params.set('difficulty', difficulty)
    } else {
      params.delete('difficulty')
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      {difficultyItems.map((difficulty) => {
        return (
          <button
            onClick={() => handleDifficultySearch(difficulty.difficulty)}
            key={difficulty.name}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            {difficulty.name}
          </button>
        );
      })}
    </>
  );
}
