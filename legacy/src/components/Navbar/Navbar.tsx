// Buttons behave differently from links, they are styled differently and have different behavior.

import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import MenuBurgerIcon from 'images/navbar/menu-burger.svg';
import CrossIcon from 'images/navbar/cross.svg';
import SiteData from '@/Data';
import Image from 'next/image';
import { useImageAsset } from 'hooks/useImageAssets';
import {
  InteractiveSectionGroup,
  InteractiveSection,
} from 'components/InteractiveSection/InteractiveSection';
import styles from './Navbar.module.css';

type NavBarProps = {
  items: Array<{ type: 'link' | 'button'; content: ReactNode }>;
};

const NavBar = ({ items }: NavBarProps) => {
  const [clicked, setClicked] = useState(false);
  const logoWhite = useImageAsset('branding_logo_white');

  const handleMenu = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <nav className="h-16 w-full bg-ec_blue dark:bg-ec_blue_darkmode transition-colors duration-300 z-50 relative">
      {/* Desktop and Mobile Container */}
      <div className="h-16 flex justify-between items-center px-5 xl:px-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <InteractiveSectionGroup
            defaultScaleLevel="small"
            rememberZIndex={false}
          >
            <InteractiveSection
              sectionId="navbar-logo"
              elementType="image"
              className="inline-block"
            >
              <Link
                href={SiteData.HomeTarget}
                onClick={closeMenu}
                className="inline-block"
              >
                <Image
                  src={logoWhite?.url || SiteData.LogoWhite}
                  alt="Entrepreneurship Club Polimi"
                  width={200}
                  height={56}
                  className="h-14 w-auto"
                />
              </Link>
            </InteractiveSection>
          </InteractiveSectionGroup>
        </div>

        {/* Desktop Navigation Links - Hidden on mobile, visible on xl */}
        <ul className="hidden xl:flex gap-8 items-center h-full">
          {items.map((item, index) => {
            if (!item.type) {
              console.error(
                `Navbar item ${index} has no type field! Rendering errors may occur, make sure to set a type for each navbar element.`,
              );
            }

            const itemClass =
              item.type === 'button'
                ? 'custom-button-class'
                : 'whitespace-nowrap text-white dark:text-ec_text_darkmode transition-colors duration-300 relative group';

            return (
              <li key={index} className={itemClass}>
                {item.content}
                {item.type !== 'button' && (
                  <span className={styles['navbar-underline']}></span>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Burger Menu - Visible on mobile, hidden on xl */}
        <div className="xl:hidden z-50">
          <InteractiveSectionGroup
            defaultScaleLevel="medium"
            rememberZIndex={false}
          >
            <InteractiveSection
              sectionId="mobile-burger-menu"
              elementType="text"
              className="inline-block"
            >
              <div className="cursor-pointer p-2" onClick={handleMenu}>
                {!clicked ? (
                  <Image
                    src={MenuBurgerIcon}
                    alt="Open menu"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                ) : (
                  <Image
                    src={CrossIcon}
                    alt="Close menu"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </InteractiveSection>
          </InteractiveSectionGroup>
        </div>
      </div>

      {/* Mobile Navigation Menu - Dropdown */}
      <ul
        className={`xl:hidden flex flex-col bg-ec_blue dark:bg-ec_blue_darkmode transition-all duration-300 rounded-b-lg border border-ec_border_light dark:border-ec_border_darkmode ${
          !clicked ? 'h-0 overflow-hidden' : 'overflow-visible shadow-xl'
        } absolute top-16 right-5 min-w-max z-40`}
      >
        {items.map((item, index) => {
          if (!item.type) {
            console.error(
              `Navbar item ${index} has no type field! Rendering errors may occur, make sure to set a type for each navbar element.`,
            );
          }

          // Mobile-specific styling - centered alignment and equal heights, no extra padding
          const mobileItemClass =
            item.type === 'button'
              ? 'flex justify-center items-center h-14 border-b border-ec_border_light dark:border-ec_border_darkmode border-opacity-30 last:border-b-0'
              : 'flex justify-center items-center h-14 text-white dark:text-ec_text_darkmode hover:bg-white hover:bg-opacity-20 dark:hover:bg-ec_text_darkmode dark:hover:bg-opacity-20 transition-all duration-200 border-b border-ec_border_light dark:border-ec_border_darkmode border-opacity-30 last:border-b-0 active:bg-white active:bg-opacity-30 dark:active:bg-ec_text_darkmode dark:active:bg-opacity-30 cursor-pointer';

          const handleLinkClick = () => {
            if (item.type === 'link') {
              closeMenu();
            }
          };

          // For mobile, handle buttons and links differently
          const mobileContent =
            item.type === 'button' ? (
              // For buttons, create a wrapper that takes full space
              <div className="w-full h-full mobile-nav-button-wrapper">
                {item.content}
              </div>
            ) : (
              <div className="mobile-nav-item text-center font-medium w-full px-4">
                {item.content}
              </div>
            );

          return (
            <li
              key={index}
              className={mobileItemClass}
              onClick={handleLinkClick}
            >
              {mobileContent}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
