import { MenuIcon } from '../../icons/MenuIcon';
import { SearchIcon } from '../../icons/SearchIcon';
import { translations } from '../../constants/translations';
import { twMerge } from 'tailwind-merge';

const menuItems = [
  translations.header.menu.home,
  translations.header.menu.knowUs,
  translations.header.menu.closeBy
];

const menuItemStyle =
  'text-white hover:cursor-pointer hover:bg-white/15 hover:backdrop-blur px-3 py-1 rounded-lg';

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between py-2 md:h-[4.625rem] md:p-0">
      <div className="flex items-center gap-x-2 pl-4 md:gap-x-4">
        <img
          src="/img/ice-cream-cone.png"
          className="h-[3rem] w-[3rem] md:h-[4.625rem] md:w-[4.625rem]"
        />
        <span className="max-w-[6.3125rem] text-lg leading-5 font-black md:text-[1.75rem] md:leading-[1.625rem]">
          {translations.header.title}
        </span>
      </div>

      <nav className="hidden text-2xl md:flex md:self-center">
        <ul className="flex items-center gap-x-4">
          {menuItems.map((item) => (
            <li key={item} className={menuItemStyle}>
              {item}
            </li>
          ))}
          <li className={menuItemStyle}>
            <SearchIcon className="size-8" />
          </li>
        </ul>
      </nav>

      <div className={twMerge(menuItemStyle, 'md:hidden')}>
        <MenuIcon className="size-8" />
      </div>
    </header>
  );
};

export default Header;
