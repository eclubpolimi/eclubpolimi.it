import Link from 'next/link';

import React from 'react';
import Image from 'next/image';
import Button from 'components/Button/Button';

import {
  faCalendarAlt,
  faMapMarkedAlt,
  faMoneyBillAlt,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type TravelBarProps = {
  info: {
    place: string;
    date: string;
    peoples: number;
    price: string;
    priceTerms: boolean;
  };
  registerLink: string;
  disabled?: boolean;
  className?: string;
};

const TravelBar = ({
  info,
  registerLink,
  disabled = false,
  className = '',
}: TravelBarProps) => {
  const liClass = `flex md:flex-col md:px-10 md:gap-1 items-center whitespace-nowrap
  text-ec_text dark:text-ec_text_darkmode font-medium justify-between md:justify-center
  border-solid `;

  const borderClass = `border-b-2 md:border-b-0 md:border-r-2
  border-ec_border dark:border-ec_border_darkmode `;

  return (
    <div className={className}>
      <ul
        className="grid grid-rows-5 md:grid-rows-1 content-evenly
      md:grid-cols-5 place-content-stretch gap-2 md:gap-0 md:justify-center px-8 md:pl-4 py-4
      bg-ec_background_light dark:bg-ec_background_darkmode_light rounded-xl border-solid border-[1px] border-ec_border dark:border-ec_border_darkmode drop-shadow-lg dark:drop-shadow-none"
      >
        <li className={liClass + borderClass}>
          <FontAwesomeIcon icon={faMapMarkedAlt} />
          <span>{info.place}</span>
        </li>
        <li className={liClass + borderClass}>
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span>{info.date}</span>
        </li>
        <li className={liClass + borderClass}>
          <FontAwesomeIcon icon={faPeopleGroup} />
          <span>{info.peoples}</span>
        </li>
        <li className="w-full">
          <Link
            className={`${liClass} ${
              !info.priceTerms ? 'pointer-events-none' : ''
            }`}
            href={info.priceTerms ? '#priceTerms' : {}}
            scroll={false}
          >
            <FontAwesomeIcon icon={faMoneyBillAlt} />
            <p>
              <span>{info.price}</span>
              {info.priceTerms && (
                <span className="text-ec_text_secondary dark:text-ec_text_secondary_darkmode">
                  *
                </span>
              )}
            </p>
          </Link>
        </li>
        <li className={liClass}>
          <Button 
            variant={registerLink.startsWith('http') ? 'external' : 'navigation'} 
            href={registerLink} 
            disabled={disabled}
          >
            Register
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default TravelBar;
