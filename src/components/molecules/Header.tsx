import { translations } from '../../constants/translations';
import { MenuIcon } from '../../icons/MenuIcon';
import { SearchIcon } from '../../icons/SearchIcon';

const menuItems = [
  translations.header.menu.home,
  translations.header.menu.knowUs,
  translations.header.menu.closeBy
];

const menuItemStyle =
  'text-white hover:cursor-pointer hover:bg-white/15 hover:backdrop-blur px-3 py-1 rounded-lg';

const Header = () => {
  return (
    <header className="flex h-[4.625rem] w-full items-center justify-between">
      <div className="flex items-center gap-x-4">
        <img
          src="/img/ice-cream-cone.png"
          className="h-[4.625rem] w-[4.625rem]"
        />
        <span className="max-w-[6.3125rem] text-[1.75rem] leading-[26px] font-black">
          {translations.header.title}
        </span>
      </div>

      <nav className="flex text-2xl">
        <ul className="flex items-center gap-x-10">
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

      <div className={menuItemStyle}>
        <MenuIcon className="size-8" />
      </div>
    </header>
  );
};

export default Header;
