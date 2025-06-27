import { ReviewCard } from '../../../atoms/ReviewCard';

const reviews = [
  {
    avatarUri: '',
    name: 'Uzi Nexus',
    rate: 9,
    comment: 'Indulge in frozen bliss with our irresistible ice cream delights!'
  }
  //   {
  //     avatarUri: '',
  //     name: 'Peter Parker',
  //     rate: 10,
  //     comment: 'Indulge in frozen bliss with our irresistible ice cream delights!'
  //   }
];

export const ReviewsWrapper = () => {
  return (
    <div className="flex items-center gap-5">
      {reviews.map((review, index) => {
        return <ReviewCard key={`${review.name}-${index}`} {...review} />;
      })}

      <div className="flex flex-col gap-3">
        <div className="h-4 w-2 rounded-full bg-white"></div>
        <div className="h-2 w-2 rounded-full bg-white"></div>
        <div className="h-2 w-2 rounded-full bg-white"></div>
      </div>
    </div>
  );
};
