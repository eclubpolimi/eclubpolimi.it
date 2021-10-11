import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Teams.css";

import TabSelector from "../TabSelector";
import Team from "../Team"

export default class Teams extends Component {
  propTypes = {
    // teams: list of teams
    teams: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="teams" style={{ background: this.props.background }}>
        <TabSelector tabs={this.props.teams.map((team, index) => ({
          id: index,
          name: team.teamName,
          content: <Team team={team} />
        }))}/>
      </div>
    );
  }
}
