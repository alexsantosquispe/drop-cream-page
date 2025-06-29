import { StarIcon } from '../../icons/StarIcon';
import { StartHalfIcon } from '../../icons/StartHalfIcon';

interface RateStarsProps {
  rate: number;
}

export const RateStars = ({ rate }: RateStarsProps) => {
  const [fullStars, halfStar] = [Math.floor(rate), rate % 1];

  return (
    <div className="flex h-[1.3125rem] w-full gap-x-2">
      {Array.from({ length: fullStars }, (_, index) => index + 1).map(
        (index) => (
          <StarIcon key={index} className="text-yellow-500" />
        )
      )}
      {halfStar > 0 && <StartHalfIcon className="text-yellow-500" />}
    </div>
  );
};
