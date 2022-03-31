import React, { Component } from "react";

import Team from "components/Team";
import TabSelector from "components/TabSelector";

export default class Teams extends Component {
  render() {
    const tabs = this.props.teams.map((team) => {
      return {
        name: team.teamName,
        content: <Team members={team.members} teamName={team.teamName} />,
      };
    });

    return (
      <div className="py-10">
        <h1 className="md:text-center mb-5">E-Club Teams</h1>
        <TabSelector tabs={tabs} />
      </div>
    );
  }
}
