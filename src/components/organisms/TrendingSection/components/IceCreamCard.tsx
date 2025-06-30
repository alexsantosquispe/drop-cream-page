import { useMemo, useState } from 'react';

import Button from '../../../atoms/Button';
import { Counter } from './Counter';
import cn from 'clsx';
import { translations } from '../../../../constants/translations';
import { twMerge } from 'tailwind-merge';

interface IceCreamCardProps {
  name: string;
  path: string;
  price: string;
  currency: string;
  isTrendy?: boolean;
}

const zoomImageEffect = 'transition duration-300 ease-in-out hover:scale-125';
const cardButtonStyle = 'h-10 rounded-[0.4375rem] p-0 text-lg';

export const IceCreamCard = ({
  name,
  path,
  price,
  currency,
  isTrendy = false
}: IceCreamCardProps) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const currentPrice = useMemo(() => {
    return (Math.round(count * parseFloat(price) * 100) / 100).toFixed(2);
  }, [count, price]);

  return (
    <div
      className={twMerge(
        'flex w-full flex-col items-center overflow-hidden rounded-3xl border border-white/40 bg-black/15 px-8 backdrop-blur-lg md:gap-0 lg:flex-row',
        cn({ 'bg-white text-black': isTrendy })
      )}
    >
      <img
        src={path}
        alt={name}
        className={twMerge(
          'h-[16rem] w-[16rem] lg:h-[13.5625rem] lg:w-[13.5625rem] xl:h-[18rem] xl:w-[18rem]',
          zoomImageEffect
        )}
      />

      <div className="flex w-full flex-col gap-4 pb-8 lg:gap-6 lg:py-8 xl:px-8 xl:py-0">
        <h2 className="text-center text-3xl font-semibold md:text-left md:text-2xl md:text-[1.75rem] md:font-medium">
          {name}
        </h2>

        <div className="flex flex-col gap-y-3">
          <span className="text-xl font-medium md:text-lg">
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
          <span>{`${currency} ${currentPrice}`}</span>
          <Counter
            count={count}
            onIncrement={increment}
            onDecrement={decrement}
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
