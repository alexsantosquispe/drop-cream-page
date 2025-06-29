import { RateStars } from './RateStars';
import { twMerge } from 'tailwind-merge';

interface ReviewCardProps {
  avatarUri: string;
  name: string;
  rate: number;
  comment: string;
  className?: string;
}

export const ReviewCard = ({
  avatarUri,
  name,
  rate,
  comment,
  className
}: ReviewCardProps) => {
  return (
    <div
      className={twMerge(
        'flex h-[12.625rem] flex-col justify-center gap-4 rounded-2xl bg-white px-7 shadow-2xl md:max-w-[20.6875rem]',
        className
      )}
    >
      <div className="flex items-center gap-4">
        <img className="h-[3.625rem] w-[3.625rem]" src={avatarUri} />

        <div className="flex flex-col justify-center">
          <span className="text-[1.75rem] font-medium text-black">{name}</span>
          <RateStars rate={rate} />
        </div>
      </div>

      <span className="flex text-[1.125rem] font-medium text-black/75">
        {comment}
      </span>
    </div>
  );
};
