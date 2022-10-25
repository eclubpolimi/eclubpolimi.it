type SloganProps = {
  slogan: Array<string>;
};

const Slogan = ({ slogan }: SloganProps) => {
  const lgOffset = {
    0: "lg:ml-0",
    1: "lg:ml-40",
    2: "lg:ml-80",
  };

  const smOffset = {
    0: "sm:ml-0",
    1: "sm:ml-10",
    2: "sm:ml-20",
  };

  return (
    <div className="bg-ec_blue py-8 flex flex-col items-center">
      <div>
        {slogan.map((text, index) => (
          <div
            key={index}
            className={`font-bold text-white p-5 ml-0 ${
              lgOffset[index as keyof typeof lgOffset]
            } ${smOffset[index as keyof typeof smOffset]}`}
          >
            <p className="text-2xl md:text-4xl">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slogan;
