// Changed container size, background color, and padding. Also, teams are now listed below each other

import React from 'react';
import Team from 'components/Team/Team';
import { TeamProps } from 'components/Team/Team';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button/Button';
import {
  InteractiveSectionGroup,
  InteractiveSection,
} from 'components/InteractiveSection/InteractiveSection';

type TeamsProps = {
  teams: Array<TeamProps>;
  className?: string;
};

const Teams = ({ teams, className }: TeamsProps) => {
  return (
    <div className={`py-10 ${className}`}>
      <h2 className="md:text-center mb-5 text-ec_text dark:text-ec_text_darkmode">
        E-Club Teams
      </h2>
      <div className="team-list space-y-10">
        {teams.map((team: TeamProps) => (
          <div key={team.teamName} className="team-section">
            <div className="flex items-center">
              <div className="w-full h-[4px] bg-ec_blue dark:bg-ec_blue_darkmode"></div>
              <div className="px-4 py-2 bg-ec_blue dark:bg-ec_blue_darkmode text-white font-bold text-2xl rounded-lg mx-4 text-center sm:whitespace-nowrap whitespace-normal sm:inline-block w-auto">
                {team.teamName}
              </div>
              <div className="w-full h-[4px] bg-ec_blue dark:bg-ec_blue_darkmode"></div>
            </div>
            
            {/* Download button placed under team title, but not for Board */}
            {team.teamName.toLowerCase() !== 'board' && (
              <div className="flex justify-center mt-4 mb-6">
                <Button
                  to="#"
                  onClick={() => {
                    // TODO: Replace with actual PDF URL from future query
                    console.log(`Download PDF for ${team.teamName}`);
                    // For now, we'll show an alert
                    alert(`PDF download for ${team.teamName} will be available soon!`);
                  }}
                  className="group flex items-center gap-2"
                >
                  <FontAwesomeIcon 
                    icon={faDownload} 
                    className="text-sm group-hover:animate-bounce" 
                  />
                  <span className="text-sm font-medium">Team Info</span>
                </Button>
              </div>
            )}
            
            <Team members={team.members} teamName={team.teamName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
