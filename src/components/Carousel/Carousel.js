import React, { Component } from "react";
import {
  faArrowRight,
  faArrowLeft,
  faRegPauseCircle,
  faRegPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./Carousel.css";

/*
TO DO: Style delle frecce = renderle più grandi in base alla dimensione del carosello
*/
export default class Carousel extends Component {
  static propTypes = {
    //SliderData: Array of image addresses
    SliderData: PropTypes.array,
    //height: height of carousel in px
    height: PropTypes.string,
    //width: width of carousel in px
    width: PropTypes.string,
    //arrowSize: size of arrow in px
    arrowSize: PropTypes.string,
    //autoplay: temporal interval between two pictures in milliseconds
    autoplay: PropTypes.number,
    // className: CSS classes to apply to the outer div
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      length: this.props.SliderData.length,
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
    const ListOfImages = this.props.SliderData;
    const Slider = ListOfImages.map((slide, index) => (
      <div
        className={
          index === this.state.current
            ? "carousel-slide-active"
            : "carousel-slide"
        }
        key={index}
      >
        {index === this.state.current && (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            className="carousel-image"
            src={slide.image}
            style={{ height: this.props.height, width: this.props.width }}
          />
        )}
      </div>
    ));

    return (
      <div
        className={`carousel-container ${this.props.className}`}
        style={{ height: this.props.height }}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="carousel-left-arrow carousel-circles"
          style={{ fontSize: this.props.arrowSize }}
          onClick={this.prevSlide}
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          className="carousel-right-arrow carousel-circles"
          style={{ fontSize: this.props.arrowSize }}
          onClick={this.nextSlide}
        />
        <div className="carousel-players">
          <FontAwesomeIcon
            icon={faRegPauseCircle}
            className="carousel-pause-circle carousel-circles"
            style={{ fontSize: this.props.arrowSize }}
            onClick={this.unmountTimer}
          />
          <FontAwesomeIcon
            icon={faRegPlayCircle}
            className="carousel-play-circle carousel-circles"
            style={{ fontSize: this.props.arrowSize }}
            onClick={this.mountTimer}
          />
        </div>
        <div className="carousel-slider">{Slider}</div>
      </div>
    );
  }
}
