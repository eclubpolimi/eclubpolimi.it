import Button from 'components/Button';

type JoinUsBarProps = {
  title?: string;
  color?: 'blue' | 'orange' | 'white';
  buttonText?: string;
  to: string;
  className?: string;
  disabled?: boolean;
};

const JoinUsBar = ({
  title = '',
  color = 'orange',
  buttonText = 'Join us',
  to,
  className,
  disabled,
}: JoinUsBarProps) => {
  const getButtonColor = (): 'orange' | 'light' | 'dark' => {
    return color === 'blue' || color === 'white' ? 'orange' : 'light';
  };

  const getTitleColor = () => {
    return {
      orange: 'text-white dark:text-ec_text_darkmode',
      blue: 'text-white dark:text-ec_text_darkmode',
      white: 'text-ec_text dark:text-ec_text_darkmode',
    }[color];
  };

  const getBackgroundColor = () => {
    return {
      orange: 'bg-ec_orange dark:bg-ec_orange_darkmode',
      blue: 'bg-ec_blue dark:bg-ec_blue_darkmode',
      white: 'bg-ec_background dark:bg-ec_background_darkmode',
    }[color];
  };

  const getBorderColor = () => {
    return {
      orange: 'border-ec_orange dark:border-ec_orange_darkmode',
      blue: 'border-ec_blue dark:border-ec_blue_darkmode',
      white: 'border-ec_border dark:border-ec_border_darkmode',
    }[color];
  };

  const getTitle = () => title || 'Become one of us!';
  const getButtonText = () => buttonText || 'Join us';

  return (
    <div
      className={`${getBackgroundColor()} ${getBorderColor()} border ${className} flex flex-col gap-6 py-12 justify-center items-center`}
    >
      <h2 className={getTitleColor()}>{getTitle()}</h2>
      <Button to={to} theme={getButtonColor()} disabled={disabled}>
        {getButtonText()}
      </Button>
    </div>
  );
};

export default JoinUsBar;
