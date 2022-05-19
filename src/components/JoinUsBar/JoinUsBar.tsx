import Button from "components/Button";
import { ButtonProps } from "components/Button/Button";

type JoinUsBarProps = {
  title: string;
  color: "blue" | "orange" | "white";
  buttonText: string;
  to: string;
  className?: string;
};

const JoinUsbar = ({
  title,
  color,
  buttonText,
  to,
  className,
}: JoinUsBarProps) => {
  const getButtonColor = (): ButtonProps["theme"] => {
    const colorsMap = new Map<JoinUsBarProps["color"], ButtonProps["theme"]>([
      ["orange", "light"],
      ["blue", "orange"],
      ["white", "orange"],
    ]);

    return colorsMap.get(color) || "orange";
  };

  const getTitle = (): string => {
    return title || "Become one of us!";
  };

  const getButtonText = (): string => {
    return buttonText || "Join us";
  };

  return (
    <div
      className={`bg-${color} ${className} flex flex-col gap-6 py-12 justify-center items-center`}
    >
      <h1 className="text-white">{getTitle()}</h1>
      <Button to={to} theme={getButtonColor()}>
        {getButtonText()}
      </Button>
    </div>
  );
};

export default JoinUsbar;
