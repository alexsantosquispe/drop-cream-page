import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const counterButtonStyle =
  'px-4 py-2 text-sm hover:cursor-pointer hover:bg-white/15';

export const Counter = ({ className }: { className?: string }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count + 1);
  };

  return (
    <div
      className={twMerge(
        'flex overflow-hidden rounded-[0.625rem] border border-white/80',
        className
      )}
    >
      <button
        className={twMerge(counterButtonStyle, 'border-r')}
        onClick={increment}
      >
        +
      </button>
      <span className="w-16 self-center px-6 text-center text-base font-medium">
        {count}
      </span>
      <button
        className={twMerge(counterButtonStyle, 'border-l')}
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
};
