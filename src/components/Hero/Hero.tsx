import Image, { StaticImageData } from "next/image";

type HeroProps = {
  backgroundImage: StaticImageData | string;
  height: string;
  darkness: number;
  contentType: string;
  text?: string;
  logo?: StaticImageData | string;
  alignTop?: boolean;
};

const Hero = ({
  backgroundImage,
  height,
  darkness,
  contentType,
  text,
  logo,
  alignTop = false,
}: HeroProps) => {
  return (
    <div
      className="w-full flex justify-center items-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,${darkness}), rgba(0,0,0,${darkness}))`,
        height: height,
      }}
    >
      <Image
        src={backgroundImage}
        fill
        alt="Hero image"
        className="-z-10 object-cover"
      />
      {contentType === "text" ? (
        <div className="text-white lg:text-4xl text-2xl font-bold">{text}</div>
      ) : (
        logo && <Image className="lg:w-[400px] w-[80vw]" src={logo} alt="" />
      )}
    </div>
  );
};

export default Hero;
