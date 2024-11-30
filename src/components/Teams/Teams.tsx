//Changed container size, background color, and padding. also teams are now listed bekiw each other

import Team from 'components/Team';
import { TeamProps } from 'components/Team/Team';

type TeamsProps = {
  teams: Array<TeamProps>;
  className?: string;
};

const Teams = ({ teams, className }: TeamsProps) => {
  return (
    <div className={`py-10 ${className}`}>
      <h2 className="md:text-center mb-5">E-Club Teams</h2>
      <div className="team-list space-y-10">
        {teams.map((team: TeamProps) => (
          <div key={team.teamName} className="team-section">
            <div className="flex items-center">
              <div className="w-full h-[4px] bg-[#001066]"></div>
              <div className="px-4 py-2 bg-[#001066] text-white font-bold text-2xl rounded-lg mx-4 text-center whitespace-nowrap">
                {team.teamName}
              </div>
              <div className="w-full h-[4px] bg-[#001066]"></div>
            </div>
            <Team members={team.members} teamName={team.teamName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
