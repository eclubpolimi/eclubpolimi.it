import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Teams.css";

import Team from "./Team";
import TabSelector from "components/TabSelector";

export default class Teams extends Component {
  propTypes = {
    // teams: object containing teams data
    teams: PropTypes.object.isRequired,
    // background
    background: PropTypes.string,
    // className: CSS classes to apply to the outer div
    className: PropTypes.string,
  };

  /* teams prop:
  [
    {
      teamName: string,
      teamComponents:
      [
        {
          name: string,
          image: obj,
          description: string,
        },
      ]
    },
  ]
  */

  render() {
    const tabs = this.props.teams.map((team) => {
      return {
        name: team.teamName,
        content: <Team members={team.teamComponents} />,
      };
    });

    return (
      <div
        className={`teams ${this.props.className}`}
        style={{ background: this.props.background }}
      >
        <h2 className="teams-header">E-Club teams</h2>
        <TabSelector tabs={tabs} />
      </div>
    );
  }
}
