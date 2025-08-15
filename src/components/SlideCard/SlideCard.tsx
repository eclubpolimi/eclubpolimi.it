import Image from 'next/image';
import { useRef } from 'react';

import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type SlideCardProps = {
  frontImage: string;
  height: string;
  width: string;
  cardText: {
    nameSurname: string;
    role: string;
    quote: string;
    quoteAuthor: string;
    marksColor: string;
    email: string;
    linkedinUrl: string;
    instagramUrl: string;
  };
};

const SlideCard = ({ frontImage, height, width, cardText }: SlideCardProps) => {
  const slideDivRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (slideDivRef.current) {
      slideDivRef.current.style.height = '100%';
    }
  };

  const handleMouseLeave = () => {
    if (slideDivRef.current) {
      slideDivRef.current.style.height = '80px';
    }
  };

  return (
    <div
      className="group m-4 relative flex flex-col items-center border-solid border-2 border-ec_border dark:border-ec_border_darkmode rounded-lg shadow-xl overflow-hidden"
      style={{
        height: height,
        width: width,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={frontImage}
        alt={cardText.nameSurname}
        fill
        className="object-cover"
      />
      <div
        ref={slideDivRef}
        className="absolute bg-ec_background dark:bg-ec_background_darkmode bottom-0 left-0 right-0 w-full overflow-hidden flex flex-col items-center"
        style={{
          height: '80px',
          transition: 'height 0.5s ease-out',
        }}
      >
        <div className="text-lg font-semibold pt-4 text-ec_text dark:text-ec_text_darkmode">
          {cardText.nameSurname}
        </div>
        <div className="text-ec_grey_darkmode dark:text-ec_grey transition-colors duration-300">
          {cardText.role}
        </div>

        <div className="p-4 relative h-full w-full">
          <div className="flex flex-row">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              size="2x"
              color={cardText.marksColor}
            />
            <div className="ml-2 text-xs">
              <div className="text-ec_text dark:text-ec_text_darkmode transition-colors duration-300">
                {cardText.quote}
              </div>
              <div className="w-full text-ec_grey  text-left">
                - {cardText.quoteAuthor}
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-evenly absolute bottom-0 right-0 left-0 pb-4">
            {cardText.email && (
              <a
                href={`mailto:${cardText.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="transition duration-200 text-ec_grey dark:text-ec_grey_darkmode transition-colors duration-300 hover:text-ec_text dark:hover:text-ec_text_darkmode"
                />
              </a>
            )}

            {cardText.instagramUrl && (
              <a href={cardText.instagramUrl} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="transition duration-200 text-ec_grey dark:text-ec_grey_darkmode transition-colors duration-300 hover:text-ec_text dark:hover:text-ec_text_darkmode"
                />
              </a>
            )}

            {cardText.linkedinUrl && (
              <a href={cardText.linkedinUrl} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="2x"
                  className="transition duration-200 text-ec_grey dark:text-ec_grey_darkmode transition-colors duration-300 hover:text-ec_text dark:hover:text-ec_text_darkmode"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
