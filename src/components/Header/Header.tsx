import { translations } from '../../constants/translations';

const Header = () => {
  return (
    <header className="flex h-[4.625rem] w-full items-center justify-between">
      <div className="flex items-center gap-x-4">
        <img
          src="/icons/ice-cream-cone.png"
          className="h-[4.625rem] w-[4.625rem]"
        />
        <span className="max-w-[6.3125rem] text-[1.75rem] leading-[26px] font-black">
          {translations.header.title}
        </span>
      </div>
      <nav className="flex text-[1.75rem]">
        <ul className="flex items-center gap-x-12">
          <li>{translations.header.menu.home}</li>
          <li>{translations.header.menu.knowUs}</li>
          <li>{translations.header.menu.closeBy}</li>
          <li>
            <img
              src="/icons/search-icon.png"
              className="h-[1.8125rem] w-[1.8125rem]"
            />
          </li>
        </ul>
      </nav>
      <div>
        <img
          src="/icons/menu-icon.png"
          className="h-[1.8125rem] w-[1.8125rem]"
        />
      </div>
    </header>
  );
};

export default Header;
