import OutlineLabel from 'components/OutlineLabel/OutlineLabel';
import { ReactNode } from 'react';

type LabeledOutlineCardProps = {
  className: string;
  label: string;
  text: string | ReactNode;
  invertedColors?: boolean;
  labelDx?: boolean;
};

const LabeledOutlineCard = ({
  className = '',
  label,
  text,
  invertedColors = false,
  labelDx = false,
}: LabeledOutlineCardProps) => {
  return (
    <div
      className={`${className} flex flex-col items-center ${
        labelDx ? 'md:items-end' : 'md:items-start'
      }`}
    >
      {label && (
        <OutlineLabel
          className="z-10"
          invertedColors={invertedColors}
          text={label}
        />
      )}
      <div
        className={`relative border border-solid border-ec_border dark:border-ec_border_darkmode 
        rounded-xl p-4 lg:p-8 my-4 -mt-8 pt-12 lg:pt-12 
        shadow-md md:shadow-lg transition 
        bg-ec_background dark:bg-ec_background_darkmode`}
      >
        <p className="text-ec_text dark:text-ec_text_darkmode">{text}</p>
      </div>
    </div>
  );
};

export default LabeledOutlineCard;
