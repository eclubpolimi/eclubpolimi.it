import Button from 'components/Button';

type JoinUsCardProps = {
  height: string;
  width: string;
  advantages: Array<string>;
  role: string;
  to: string;
  closed?: boolean;
};

const JoinUsCard = ({
  height,
  width,
  advantages = [], // Ensure it's always an array
  role,
  to,
  closed = false,
}: JoinUsCardProps) => {
  return (
    <div
      className="bg-white rounded-md shadow-lg p-5 flex flex-col justify-between items-center"
      style={{ height: height, width: width }}
    >
      <div className="mx-5">
        <h2 className="md:text-center">{role}</h2>
        <ul className="list-disc">
          {Array.isArray(advantages) ? (
            advantages.map((pro, index) => (
              <li className="my-2 text-sm" key={index}>
                {pro}
              </li>
            ))
          ) : (
            <li className="my-2 text-sm text-gray-500">
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
