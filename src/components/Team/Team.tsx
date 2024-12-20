//members are now centered in their team, not aligned left, and we display up to 5 members per row

import SlideCard from 'components/SlideCard';
import { SlideCardProps } from 'components/SlideCard/SlideCard';

export type TeamProps = {
  members: Array<{
    image: string;
    height?: string;
    width?: string;
    cardText: SlideCardProps['cardText'];
  }>;
  teamName: string;
};

const Team = ({ members }: TeamProps) => {
  const cardSize = {
    height: '300px',
    width: '210px',
  };

  return (
    <div className="h-full w-full flex flex-col justify-center">
      <div className="grid justify-items-center align-middle sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {members.map((member, index) => (
          <div key={index} className="flex justify-center items-center">
            <SlideCard
              frontImage={member.image}
              height={cardSize.height}
              width={cardSize.width}
              cardText={member.cardText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
