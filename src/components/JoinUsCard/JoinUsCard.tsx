import Button from 'components/Button/Button';

type JoinUsCardProps = {
  height: string;
  width: string;
  advantages: Array<string>;
  role: string;
  to: string;
  closed?: boolean;
  className?: string; // <-- New optional prop
};

const JoinUsCard = ({
  height,
  width,
  advantages = [], // Ensure it's always an array
  role,
  to,
  closed = false,
  className = '', // Default empty if not provided
}: JoinUsCardProps) => {
  return (
    <div
      className={`bg-ec_background_light dark:bg-ec_background_darkmode 
      rounded-md shadow-lg p-5 flex flex-col justify-between items-center 
      border-2 border-ec_border_light dark:border-ec_border_darkmode ${className}`}
      style={{ height: height, width: width }}
    >
      <div className="mx-5">
        <h2 className="md:text-center text-ec_text dark:text-ec_text_darkmode">
          {role}
        </h2>
        <ul className="list-disc">
          {Array.isArray(advantages) ? (
            advantages.map((pro, index) => (
              <li
                className="my-2 text-sm text-ec_text_secondary dark:text-ec_text_secondary_darkmode"
                key={index}
              >
                {pro}
              </li>
            ))
          ) : (
            <li className="my-2 text-sm text-ec_text_secondary dark:text-ec_text_secondary_darkmode">
              Error in loading benefits
            </li>
          )}
        </ul>
      </div>
      <Button theme="orange" to={to} disabled={closed}>
        {closed ? 'Closed' : 'Apply Now!'}
      </Button>
    </div>
  );
};

export default JoinUsCard;
