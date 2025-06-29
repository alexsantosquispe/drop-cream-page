import { IceCreamCard } from './components/IceCreamCard';
import { TrendingButton } from './components/TrendingButton';

const iceCreams = [
  {
    name: 'Mix Ice Cream',
    path: '/img/mix-ice-cream.webp',
    price: '7.59',
    currency: '$',
    isTrendy: false
  },
  {
    name: 'Chocolate Cup',
    path: '/img/chocolate-cup.webp',
    price: '5.00',
    currency: '$',
    isTrendy: true
  },
  {
    name: 'Barry Ice cream',
    path: '/img/barry-ice-cream.webp',
    price: '6.49',
    currency: '$',
    isTrendy: false
  },
  {
    name: 'Strawberry Ice cream',
    path: '/img/strawberry-ice-cream.webp',
    price: '6.59',
    currency: '$',
    isTrendy: false
  }
];

export const TrendingSection = () => {
  return (
    <div className="flex w-full flex-col gap-4 px-4 md:gap-10 lg:p-0">
      <TrendingButton />
      <div className="grid-col-1 grid gap-5 md:grid-cols-2 xl:gap-10">
        {iceCreams.map((item) => (
          <IceCreamCard key={`${item.name}-${item.price}`} {...item} />
        ))}
      </div>
    </div>
  );
};
