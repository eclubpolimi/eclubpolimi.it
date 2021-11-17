import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Teams.css";

import FlipCard from "components/FlipCard";

export default class Teams extends Component {
  propTypes = {
    // members: object containing team members
    members: PropTypes.object.isRequired,
    // background
    background: PropTypes.string,
    // className: CSS classes to apply to the outer div
    className: PropTypes.string,
  };

  /* members prop
  [
    {
      name: string,
      image: obj,
      description: string,
    },
  ]
  */

  cardSize = {
    height: "100%",
    width: "100%",
  };

  render() {
    return (
      <div className="team-members">
        {this.props.members.map((member) => (
          <div className="member-card">
            <FlipCard
              frontImage={member.image}
              height={this.cardSize.height}
              width={this.cardSize.width}
              frontText={member.name}
              backText={member.description}
            />
          </div>
        ))}
      </div>
    );
  }
}
