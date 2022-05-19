const OutlineLabel = ({ invertedColors, text, className = "" }) => {
  return (
    <div
      className={`${className} relative py-4 px-12 w-max rounded-xl
      ${
        invertedColors
          ? "bg-orange after:border-blue"
          : "bg-blue after:border-orange"
      }
      after:block after:absolute after:border-[1.5px] after:border-solid
      after:top-0 after:left-0 after:right-0 after:bottom-0 after:transform after:-translate-x-0.5 after:-translate-y-1
      after:content-[''] after:rounded-xl after:pointer-events-none`}
    >
      <p className="text-white font-semibold text-xl leading-tight">{text}</p>
    </div>
  );
};

export default OutlineLabel;
