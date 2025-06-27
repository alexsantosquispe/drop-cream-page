import { IceCreamCard } from './components/IceCreamCard';
import { TrendingButton } from './components/TrendingButton';

const iceCreams = [
  {
    name: 'Mix Ice Cream',
    path: '/img/mix-ice-cream.webp',
    price: 199,
    currency: 'Rs.',
    isTrendy: false
  },
  {
    name: 'Chocolate Cup',
    path: '/img/chocolate-cup.webp',
    price: 129,
    currency: 'Rs.',
    isTrendy: true
  },
  {
    name: 'Barry Ice cream',
    path: '/img/barry-ice-cream.webp',
    price: 109,
    currency: 'Rs.',
    isTrendy: false
  },
  {
    name: 'Strawberry Ice cream',
    path: '/img/strawberry-ice-cream.webp',
    price: 149,
    currency: 'Rs.',
    isTrendy: false
  }
];

export const TrendingSection = () => {
  return (
    <div className="flex w-full flex-col gap-[2.6875rem]">
      <TrendingButton />

      <div className="grid grid-cols-2 gap-10">
        {iceCreams.map((item) => (
          <IceCreamCard key={`${item.name}-${item.price}`} {...item} />
        ))}
      </div>
    </div>
  );
};
