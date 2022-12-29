import Button from "components/Button";

type JoinUsBarProps = {
  title?: string;
  color?: "blue" | "orange" | "white";
  buttonText?: string;
  to: string;
  className?: string;
  disabled?: boolean;
};

const JoinUsbar = ({
  title = "",
  color = "orange",
  buttonText = "Join us",
  to,
  className,
  disabled,
}: JoinUsBarProps) => {
  const getButtonColor = (): "orange" | "light" | "dark" => {
    return ({
      orange: "light",
      blue: "orange",
      white: "orange",
    }[color] || "orange") as "orange" | "light" | "dark";
  };

  const getTitleColor = () => {
    return {
      orange: "text-white",
      blue: "text-white",
      white: "text-black",
    }[color];
  };

  const getTitle = () => {
    return title || "Become one of us!";
  };

  const getButtonText = () => {
    return buttonText || "Join us";
  };

  return (
    <div
      className={`bg-ec_${color} ${className} flex flex-col gap-6 py-12 justify-center items-center`}
    >
      <h2 className={getTitleColor()}>{getTitle()}</h2>
      <Button to={to} theme={getButtonColor()} disabled={disabled}>
        {getButtonText()}
      </Button>
    </div>
  );
};

export default JoinUsbar;
