import "./Hero.css";

type HeroProps = {
  backgroundImage: string;
  height: string;
  darkness: number;
  contentType: string;
  text?: string;
  logo?: string;
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
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,${darkness}), rgba(0,0,0,${darkness})), url(${backgroundImage})`,
        height: height,
        ...(!alignTop && { backgroundPosition: "center" }),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {contentType === "text" ? (
        <div className="hero-text">{text}</div>
      ) : (
        <img className="hero-logo" src={logo} alt="" />
      )}
    </div>
  );
};

export default Hero;
