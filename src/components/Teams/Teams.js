import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Teams.css";

import FlipCard from "../FlipCard";

export default class Teams extends Component {
  propTypes = {
    // teams: object containing teams data
    teams: PropTypes.object.isRequired,
    // background
    background: PropTypes.string,
  };

  /*
    Teams prop:
    [
        {
            teamName,
            teamComponents: [
                {
                    name,
                    image,
                    description,
                },
            ]
        },
    ]
  */

  cardSize = {
    height: "100%",
    width: "100%",
  };

  render() {
    return (
      <div className="teams" style={{ background: this.props.background }}>
        <h2 className="teams-header">E-Club teams</h2>
        {this.props.teams.map((team) => (
          <div className="team">
            <h3 className="team-title">{team.teamName}</h3>
            <div className="team-components">
              {team.teamComponents.map((member) => (
                <div className="component-card">
                  <FlipCard
                    frontImage={member.image}
                    height={this.cardSize.height}
                    width={this.cardSize.width}
                    frontText={member.name}
                    backText={member.description}
                  ></FlipCard>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
