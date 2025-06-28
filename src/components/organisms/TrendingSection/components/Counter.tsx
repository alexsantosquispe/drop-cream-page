import { twMerge } from 'tailwind-merge';

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  className?: {
    container?: string;
    addButton?: string;
    minusButton?: string;
  };
}

const counterButtonStyle =
  'flex items-center justify-center px-3 py-2 text-sm hover:cursor-pointer hover:bg-white/15';

export const Counter = ({
  count,
  onIncrement,
  onDecrement,
  className
}: CounterProps) => {
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
          className?.minusButton
        )}
        onClick={onDecrement}
      >
        -
      </button>
      <div className="flex w-12 items-center justify-center px-6 text-center text-sm font-medium">
        {count}
      </div>
      <button
        className={twMerge(
          counterButtonStyle,
          'border-l',
          className?.addButton
        )}
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
};
