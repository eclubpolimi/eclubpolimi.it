import React, { Component } from "react";

import Team from "components/Team";
import TabSelector from "components/TabSelector";
import ParagraphTitle from "components/ParagraphTitle";

export default class Teams extends Component {
  render() {
    const tabs = this.props.teams.map((team) => {
      return {
        name: team.teamName,
        content: <Team members={team.members} teamName={team.teamName} />,
      };
    });

    return (
      <div className="bg-gray-100 pb-10">
        <ParagraphTitle text="Eclub teams" />
        <TabSelector tabs={tabs} />
      </div>
    );
  }
}
