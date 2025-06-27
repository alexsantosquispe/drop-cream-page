import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface CounterProps {
  className?: {
    container?: string;
    addButton?: string;
    minusButton?: string;
  };
}

const counterButtonStyle =
  'flex items-center justify-center px-4 py-2 text-sm hover:cursor-pointer hover:bg-white/15';

export const Counter = ({ className }: CounterProps) => {
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
        className?.container
      )}
    >
      <button
        className={twMerge(
          counterButtonStyle,
          'border-r',
          className?.addButton
        )}
        onClick={increment}
      >
        +
      </button>
      <span className="w-16 self-center px-6 text-center text-base font-medium">
        {count}
      </span>
      <button
        className={twMerge(
          counterButtonStyle,
          'border-l',
          className?.minusButton
        )}
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
};
