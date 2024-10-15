import clsx from 'clsx';

import { Difficulty } from 'app/app/types'

interface StatusProps {
  readonly status: string
}

export default function RecipeDifficulty({ status }: StatusProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-5 py-1 text-xs',
        {
          'bg-green-400 text-white': status === Difficulty.Easy,
          'bg-orange-300 text-gray-500': status === Difficulty.Medium,
        },
      )}
    >
      {status === Difficulty.Easy ? (
        <>
          Fácil
        </>
      ) : null}
      {status === Difficulty.Medium ? (
        <>
          Media
        </>
      ) : null}
    </span>
  );
}