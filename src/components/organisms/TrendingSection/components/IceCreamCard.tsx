import { twMerge } from 'tailwind-merge';
import { translations } from '../../../../constants/translations';
import Button from '../../../atoms/Button';
import cn from 'clsx';

interface IceCreamCardProps {
  name: string;
  path: string;
  price: number;
  currency: string;
  isTrendy?: boolean;
}

const cardButtonStyle = 'h-10 w-[8.6875rem] rounded-[0.4375rem] p-0 text-lg';

export const IceCreamCard = ({
  name,
  path,
  price,
  currency,
  isTrendy = false
}: IceCreamCardProps) => {
  return (
    <div
      className={twMerge(
        'flex w-full items-center gap-5 rounded-3xl border border-white/40 bg-black/15 px-[2rem] py-4 backdrop-blur-lg',
        cn({ 'bg-white text-black': isTrendy })
      )}
    >
      <img src={path} alt={name} className="h-[17rem] w-[17rem]" />

      <div className="flex w-full flex-col gap-4 pr-[2.625rem]">
        <h2 className="text-[1.75rem] font-medium">{name}</h2>

        <div className="flex flex-col gap-y-3">
          <span className="text-xl font-medium">
            {translations.content.trending.card.orderType}
          </span>
          <div className="flex gap-x-8">
            <Button
              label={translations.content.trending.card.onTable}
              onClick={() => {
                console.log('on table');
              }}
              className={twMerge(
                cardButtonStyle,
                cn({
                  'border-black text-black hover:bg-black hover:text-white':
                    isTrendy
                })
              )}
              isSecondary
            />
            <Button
              label={translations.content.trending.card.delivery}
              onClick={() => {
                console.log('on table');
              }}
              className={twMerge(
                cardButtonStyle,
                cn({
                  'border-black text-black hover:bg-black hover:text-white':
                    isTrendy
                })
              )}
              isSecondary
            />
          </div>
        </div>

        <div className="flex justify-between text-[1.75rem]">
          <span>{`${currency} ${price}/-`}</span>
          <div>counter</div>
        </div>
      </div>
    </div>
  );
};
