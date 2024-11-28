import { ReactNode, useState } from 'react';

import MenuBurgerIcon from 'assets/navbar/menu-burger.svg';
import CrossIcon from 'assets/navbar/cross.svg';
import SiteData from 'Data';
import Image from 'next/image';

type NavBarProps = {
  items: Array<{ type: 'link' | 'button'; content: ReactNode }>;
};

const NavBar = ({ items }: NavBarProps) => {
  const [clicked, setClicked] = useState(false);

  const handleMenu = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  const navClass = `h-16 w-full bg-ec_blue z-50 flex flex-nowrap relative`;
  const navDesktopClass = `xl:px-10 xl:flex-row xl:justify-between xl:items-center`;
  const navMobileClass = `flex-col`;

  const linksClass = 'flex px-2 gap-8 items-center bg-ec_blue transition-all';
  const linksDesktopClass = 'xl:flex-row xl:h-full xl:static';
  const linksMobileClass = `flex-col ${
    !clicked ? 'h-0 overflow-hidden py-0' : 'py-10'
  } absolute top-16 left-0 right-0`;

  return (
    <nav className={`${navClass} ${navDesktopClass} ${navMobileClass}`}>
      <div className="h-16 flex flex-col justify-center">
        <a href={SiteData.HomeTarget} onClick={closeMenu}>
          <Image
            src={SiteData.LogoWhite}
            alt="Entrepreneurship Club Polimi"
            className="h-14 w-fit xl:p-0 pr-16"
          />
        </a>
      </div>
      <ul className={`${linksClass} ${linksDesktopClass} ${linksMobileClass}`}>
        {items.map((item, index) => {
          if (!item.type) {
            console.error(
              `Navbar item ${index} has no type field! Rendering errors may occur, make sure to set a type for each navbar element.`,
            );
          }
          return (
            <li
              key={index}
              className="whitespace-nowrap text-white"
              onClick={closeMenu}
            >
              {item.content}
            </li>
          );
        })}
      </ul>
      <div className={`h-6 w-6 absolute right-5 top-5 xl:hidden`}>
        {!clicked ? (
          <Image src={MenuBurgerIcon} alt="Open menu" onClick={handleMenu} />
        ) : (
          <Image src={CrossIcon} alt="Close menu" onClick={handleMenu} />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
