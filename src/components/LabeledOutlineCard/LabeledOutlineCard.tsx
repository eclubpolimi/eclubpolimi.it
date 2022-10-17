import OutlineLabel from "components/OutlineLabel";

type LabeledOutlineCardProps = {
  className: string;
  label: string;
  text: string;
  invertedColors: boolean;
  labelDx: string;
};

const LabeledOutlineCard = ({
  className = "",
  label,
  text,
  invertedColors,
  labelDx,
}: LabeledOutlineCardProps) => {
  return (
    <div
      className={`${className} flex flex-col items-center ${
        labelDx ? "md:items-end" : "md:items-start"
      }`}
    >
      {label && (
        <OutlineLabel
          className="z-10"
          invertedColors={invertedColors}
          text={label}
        ></OutlineLabel>
      )}
      <div
        className={`relative border border-solid border-slate-200 rounded-xl p-4 lg:p-8 my-4 -mt-8 pt-12 lg:pt-12
        shadow-md md:shadow-lg transition bg-white
        ${!invertedColors ? "after:border-ec_blue" : "after:border-ec_orange"}
        after:block after:absolute after:border-[1.5px] after:border-solid
        after:top-0 after:left-0 after:right-0 after:bottom-0 after:transform
        after:-translate-x-1 after:-translate-y-0.5
        after:content-[''] after:rounded-xl after:pointer-events-none lg:leading-8`}
      >
        {text}
      </div>
    </div>
  );
};

export default LabeledOutlineCard;
