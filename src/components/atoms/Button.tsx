import cn from 'clsx';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  onClick: () => void;
  label?: string;
  icon?: ReactNode;
  isSecondary?: boolean;
  className?: string;
}

const Button = ({
  label,
  icon,
  onClick,
  isSecondary,
  className
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex w-full items-center justify-center rounded-[0.625rem] bg-white/15 py-7 text-[2rem] font-normal text-white/90 backdrop-blur hover:cursor-pointer hover:bg-white/20 hover:text-white md:max-h-[5.375rem] md:max-w-[16.5rem]',
        cn({
          'border border-white/80 bg-transparent backdrop-blur-none':
            isSecondary
        }),
        className
      )}
      onClick={onClick}
    >
      {label && label}
      {icon && icon}
    </button>
  );
};

export default Button;
