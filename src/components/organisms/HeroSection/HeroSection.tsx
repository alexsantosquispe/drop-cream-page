import { IceCreamTypesWrapper } from './components/IceCreamTypesWrapper';
import { ReviewsWrapper } from './components/ReviewsWrapper';
import { TitleWrapper } from './components/TitleWrapper';

export const HeroSection = () => {
  return (
    <div className="flex justify-between">
      <TitleWrapper />

      <div className="flex flex-col gap-[3.75rem]">
        <ReviewsWrapper />
        <IceCreamTypesWrapper />
      </div>
    </div>
  );
};
