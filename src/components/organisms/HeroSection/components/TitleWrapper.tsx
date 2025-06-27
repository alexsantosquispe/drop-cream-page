import { translations } from '../../../../constants/translations';
import Button from '../../../atoms/Button';

export const TitleWrapper = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-y-6 md:max-w-[41.1875rem] md:gap-y-8">
      <h1 className="text-6xl leading-12 font-semibold md:text-left md:text-[7.5rem] md:leading-[5.85rem] lg:leading-[6.875rem]">
        {translations.content.title.line1}
        <br />
        {translations.content.title.line2}
      </h1>
      <p className="text-lg leading-[1.875rem] font-medium text-white/85 md:p-0 md:text-2xl">
        {translations.content.description}
      </p>
      <div className="flex gap-8">
        <Button
          label={translations.content.buttons.orderNow}
          onClick={() => {}}
          className="py-3 text-xl md:text-[2rem]"
          isSecondary
        />

        <Button
          label={translations.content.buttons.bookTable}
          onClick={() => {}}
          className="py-3 text-xl md:text-[2rem]"
        />
      </div>
    </div>
  );
};
