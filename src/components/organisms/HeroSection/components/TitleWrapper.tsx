import { translations } from '../../../../constants/translations';
import Button from '../../../atoms/Button';

export const TitleWrapper = () => {
  return (
    <div className="flex flex-col gap-y-8 md:max-w-[41.1875rem]">
      <h1 className="text-[7.5rem] leading-[6.875rem] font-semibold">
        {translations.content.title}
      </h1>
      <p className="text-2xl leading-[1.875rem] font-medium text-white/75">
        {translations.content.description}
      </p>
      <div className="flex gap-8">
        <Button
          label={translations.content.buttons.orderNow}
          onClick={() => {
            console.log('order button');
          }}
          isSecondary
        />

        <Button
          label={translations.content.buttons.bookTable}
          onClick={() => {
            console.log('order button');
          }}
        />
      </div>
    </div>
  );
};
