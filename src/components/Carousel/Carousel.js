import React, { Component } from "react";
import {
  faArrowRight,
  faArrowLeft,
  faPlayCircle,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./Carousel.css";

/*
TO DO: Style delle frecce = renderle più grandi in base alla dimensione del carosello
*/
export default class Carousel extends Component {
  static propTypes = {
    //sliderData: Array of image addresses
    sliderData: PropTypes.array,
    //autoplay: temporal interval between two pictures in milliseconds
    autoplay: PropTypes.number,
    // className: CSS classes to apply to the outer div
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      length: this.props.sliderData.length,
      time: 0,
      existTimer: 1,
    };
  }

  tick = () => {
    this.nextSlide();
    this.setState((state) => ({ time: state.time + 1 }));
  };

  componentDidMount = () => {
    this.interval = setInterval(this.tick, this.props.autoplay);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  nextSlide = () => {
    this.state.current < this.state.length - 1
      ? this.setState((state) => ({ current: state.current + 1 }))
      : this.setState({ current: 0 });
  };

  prevSlide = () => {
    this.state.current > 0
      ? this.setState((state) => ({ current: state.current - 1 }))
      : this.setState((state) => ({ current: state.length - 1 }));
  };

  mountTimer = () => {
    if (this.state.existTimer === 0) {
      this.setState({ existTimer: 1 });
      this.interval = setInterval(this.tick, this.props.autoplay);
    }
  };

  unmountTimer = () => {
    if (this.state.existTimer === 1) {
      this.setState({ existTimer: 0 });
      clearInterval(this.interval);
    }
  };

  render() {
    return (
      <div className={`w-full relative bg-gray-900`}>
        <div>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="z-10 text-white hover:text-gray-300 cursor-pointer h-8 absolute top-1/2 left-8"
            style={{ fontSize: this.props.arrowSize }}
            onClick={this.prevSlide}
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            className="z-10 text-white hover:text-gray-300 cursor-pointer h-8 absolute top-1/2 right-8"
            style={{ fontSize: this.props.arrowSize }}
            onClick={this.nextSlide}
          />
          <div className="absolute z-10 left-1/2 bottom-8">
            <FontAwesomeIcon
              icon={faPauseCircle}
              className="text-white hover:text-gray-300 cursor-pointer h-8"
              style={{ fontSize: this.props.arrowSize }}
              onClick={this.unmountTimer}
            />
            <FontAwesomeIcon
              icon={faPlayCircle}
              className="text-white hover:text-gray-300 cursor-pointer h-8"
              style={{ fontSize: this.props.arrowSize }}
              onClick={this.mountTimer}
            />
          </div>
        </div>
        <div className="w-full">
          {this.props.sliderData.map((slide, index) => (
            <div
              className={` transition-opacity duration-1000 ${
                index === this.state.current ? "opacity-100" : "h-0 opacity-0"
              }`}
              key={index}
            >
              <img className="w-full h-full" src={slide.image} alt="Carousel" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
