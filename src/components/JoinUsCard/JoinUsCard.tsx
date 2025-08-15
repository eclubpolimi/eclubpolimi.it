import Button from 'components/Button/Button';

type JoinUsCardProps = {
  height: string;
  advantages: string[];
  role: string;
  to: string;
  closed?: boolean;
  className?: string; // <-- New optional prop
};

const JoinUsCard = ({
  height,
  advantages = [], // Ensure it's always an array
  role,
  to,
  closed = false,
  className = '', // Default empty if not provided
}: JoinUsCardProps) => {
  return (
    <div
      className={`bg-ec_background_light dark:bg-ec_background_darkmode transition-colors duration-300 
      rounded-md shadow-lg p-5 flex flex-col
      border-2 border-ec_border_light dark:border-ec_border_darkmode w-full max-w-sm sm:max-w-md ${className}`}
      style={{ minHeight: height }}
    >
      <div className="mx-5 flex-grow flex flex-col">
        <h2 className="md:text-center text-ec_text dark:text-ec_text_darkmode transition-colors duration-300 mb-4">
          {role}
        </h2>
        <div className="flex-grow flex items-center">
          <ul className="list-disc w-full">
            {Array.isArray(advantages) ? (
              advantages.map((pro, index) => (
                <li
                  className="my-2 text-sm text-ec_text_secondary dark:text-ec_text_secondary_darkmode transition-colors duration-300"
                  key={index}
                >
                  {pro}
                </li>
              ))
            ) : (
              <li className="my-2 text-sm text-ec_text_secondary dark:text-ec_text_secondary_darkmode transition-colors duration-300">
                Error in loading benefits
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="mt-4 flex justify-center flex-shrink-0">
        <Button variant="navigation" href={to} disabled={closed}>
          {closed ? 'Closed' : 'Apply Now!'}
        </Button>
      </div>
    </div>
  );
};

export default JoinUsCard;
