import { IceCreamTypesWrapper } from './components/IceCreamTypesWrapper';
import { ReviewsWrapper } from './components/ReviewsWrapper';
import { TitleWrapper } from './components/TitleWrapper';

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-16 px-6 md:justify-between md:px-0 lg:flex-row lg:items-start lg:gap-8">
      <TitleWrapper />
      <div className="flex flex-col items-center gap-[3.75rem]">
        <ReviewsWrapper />
        <IceCreamTypesWrapper />
      </div>
    </div>
  );
};
