import { twMerge } from 'tailwind-merge';
import { translations } from '../../../../constants/translations';
import Button from '../../../atoms/Button';
import cn from 'clsx';
import { Counter } from './Counter';

interface IceCreamCardProps {
  name: string;
  path: string;
  price: number;
  currency: string;
  isTrendy?: boolean;
}

const cardButtonStyle = 'h-10 rounded-[0.4375rem] p-0 text-lg';

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
        'flex w-full flex-col items-center gap-5 rounded-3xl border border-white/40 bg-black/15 backdrop-blur-lg md:gap-0 md:py-4 lg:flex-row lg:px-8',
        cn({ 'bg-white text-black': isTrendy })
      )}
    >
      <img
        src={path}
        alt={name}
        className="h-[20rem] w-[20rem] md:h-[16rem] md:w-[16rem]"
      />

      <div className="flex w-full flex-col gap-8 pb-8 md:gap-4 lg:pb-0 xl:pr-[3rem]">
        <h2 className="text-center text-[1.75rem] font-semibold md:text-left md:font-medium">
          {name}
        </h2>

        <div className="flex flex-col gap-y-3">
          <span className="text-xl font-medium">
            {translations.content.trending.card.orderType}
          </span>
          <div className="flex gap-x-8 text-lg">
            <Button
              label={translations.content.trending.card.onTable}
              onClick={() => {}}
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
              onClick={() => {}}
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

        <div className="flex items-center justify-between text-[1.75rem]">
          <span>{`${currency} ${price}/-`}</span>
          <Counter
            className={{
              container: cn({ 'border-black': isTrendy }),
              addButton: cn({ 'hover:bg-black hover:text-white': isTrendy }),
              minusButton: cn({ 'hover:bg-black hover:text-white': isTrendy })
            }}
          />
        </div>
      </div>
    </div>
  );
};
