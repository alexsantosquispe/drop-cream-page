import cn from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  label: string;
  onClick: () => void;
  isSecondary?: boolean;
}

const Button = ({ label, onClick, isSecondary }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex max-h-[5.375rem] w-full max-w-[16.5rem] items-center justify-center rounded-[0.625rem] bg-white/15 py-7 text-[2rem] font-normal text-white backdrop-blur',
        cn({
          'border border-white bg-transparent backdrop-blur-none': isSecondary
        })
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
