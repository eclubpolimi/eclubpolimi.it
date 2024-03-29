import Team from "components/Team";
import TabSelector from "components/TabSelector";
import { TeamProps } from "components/Team/Team";

type TeamsProps = {
  teams: Array<TeamProps>;
  className?: string;
};

const Teams = ({ teams, className }: TeamsProps) => {
  const tabs = teams.map((team: TeamProps) => {
    return {
      name: team.teamName,
      content: <Team members={team.members} teamName={team.teamName} />,
    };
  });

  return (
    <div className={`py-10 ${className} `}>
      <h2 className="md:text-center mb-5">E-Club Teams</h2>
      <TabSelector tabs={tabs} />
    </div>
  );
};

export default Teams;
