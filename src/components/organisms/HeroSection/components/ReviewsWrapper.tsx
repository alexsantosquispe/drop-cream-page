import { ReviewCard } from '../../../atoms/ReviewCard';
import cn from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

const bulletStyles = 'h-2 w-2 rounded-full bg-white/30 hover:cursor-pointer';

const reviews = [
  {
    avatarUri: '/img/avatar1.png',
    name: 'Uzi Nexus',
    rate: 4.5,
    comment: 'Indulge in frozen bliss with our irresistible ice cream delights!'
  },
  {
    avatarUri: '/img/avatar2.png',
    name: 'Peter Parker',
    rate: 5,
    comment: 'Indulge in frozen bliss with our irresistible ice cream delights!'
  },
  {
    avatarUri: '/img/avatar1.png',
    name: 'John Snow',
    rate: 3.5,
    comment: 'Indulge in frozen bliss with our irresistible ice cream delights!'
  }
];

export const ReviewsWrapper = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const selectSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="flex w-full">
      <div className="min-h-60 w-full">
        {reviews.map((review, index) => (
          <ReviewCard
            key={`${review.name}-${index}`}
            className={twMerge(
              'absolute rounded-2xl backdrop-blur',
              cn({
                'z-30 scale-100': index === 0,
                'z-20 translate-y-3 scale-x-90 bg-white/75': index === 1,
                'z-10 translate-y-6 scale-x-80 bg-white/50': index === 2
              })
            )}
            {...review}
          />
        ))}
      </div>

      <div className="ml-auto flex flex-col gap-y-2 self-center">
        {reviews.map((item, index) => {
          const isActive = index === activeSlide;
          return (
            <button
              key={`${item.name}-${index}`}
              className={twMerge(
                bulletStyles,
                cn({ 'h-5 bg-white': isActive })
              )}
              onClick={() => selectSlide(index)}
            />
          );
        })}
      </div>
    </div>
  );
};
