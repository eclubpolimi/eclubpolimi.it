//members are now centered in their team, not aligned left, and we display up to 5 members per row

import React from 'react';
import SlideCard from 'components/SlideCard/SlideCard';
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

  // Split members into rows of max 5
  const rows = [];
  for (let i = 0; i < members.length; i += 5) {
    rows.push(members.slice(i, i + 5));
  }

  return (
    <div className="h-full w-full flex flex-col justify-center">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center items-center gap-8 mb-4"
        >
          {row.map((member, index) => (
            <SlideCard
              key={index}
              frontImage={member.image}
              height={cardSize.height}
              width={cardSize.width}
              cardText={member.cardText}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Team;
