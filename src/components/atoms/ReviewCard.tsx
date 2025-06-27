import { StarIcon } from '../../icons/StarIcon';
import { StartHalfIcon } from '../../icons/StartHalfIcon';

interface ReviewCardProps {
  avatarUri: string;
  name: string;
  rate: number;
  comment: string;
}

export const ReviewCard = ({
  avatarUri,
  name,
  rate,
  comment
}: ReviewCardProps) => {
  console.log(rate);
  return (
    <div className="flex h-[12.625rem] max-w-[20.6875rem] flex-col justify-center gap-4 rounded-2xl bg-white px-6">
      <div className="flex items-center gap-4">
        <div className="h-[3.625rem] w-[3.625rem] rounded-full bg-red-500">
          {avatarUri}
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-[1.75rem] font-medium text-black">{name}</span>
          {/* TODO: Complete rating */}
          <div className="flex h-[1.3125rem] w-full gap-x-2">
            <StarIcon className="text-yellow-500" />
            <StarIcon className="text-yellow-500" />
            <StarIcon className="text-yellow-500" />
            <StarIcon className="text-yellow-500" />
            <StartHalfIcon className="text-yellow-500" />
          </div>
        </div>
      </div>

      <span className="flex text-[1.125rem] font-medium text-black/75">
        {comment}
      </span>
    </div>
  );
};
