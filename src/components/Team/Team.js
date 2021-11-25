import React, { Component } from "react";
import PropTypes from "prop-types";

import SlideCard from "components/SlideCard";

export default class Teams extends Component {
  static propTypes = {
    // members: object containing team members
    members: PropTypes.array.isRequired,
    // teamName: name of the team
    teamName: PropTypes.string.isRequired,
  };

  cardSize = {
    height: "300px",
    width: "200px",
  };

  render() {
    return (
      <div className="h-full w-full flex flex-col justify-center">
        <div className="grid align-middle sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {this.props.members.map((member, index) => (
            <div key={index} className="flex justify-center items-center">
              <SlideCard
                frontImage={member.image}
                height={this.cardSize.height}
                width={this.cardSize.width}
                cardText={member.cardText}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
