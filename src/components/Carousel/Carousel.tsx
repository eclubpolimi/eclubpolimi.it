import React, { useEffect, useState } from "react";
import {
  faArrowRight,
  faArrowLeft,
  faPlayCircle,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Carousel.css";

type CarouselProps = {
  sliderData: any;
  autoplay: number;
  className?: string;
};

const Carousel = ({ sliderData, autoplay, className = "" }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState<any>(null);
  const [existsTimer, setExistsTimer] = useState(1);

  const arrowSize = "40px";

  useEffect(() => {
    const initTimer = () => {
      const interval = setInterval(tick, autoplay);
      setTimer(interval);
    };
    initTimer();
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tick = () => {
    nextSlide();
    setTime(time + 1);
  };

  const nextSlide = () => {
    current < sliderData.length - 1 ? setCurrent(current + 1) : setCurrent(0);
  };

  const prevSlide = () => {
    current > 0 ? setCurrent(current - 1) : setCurrent(sliderData.length - 1);
  };

  const mountTimer = () => {
    if (existsTimer === 0) {
      setExistsTimer(1);
      const interval = setInterval(tick, autoplay);
      setTimer(interval);
    }
  };

  const unmountTimer = () => {
    if (existsTimer === 1) {
      setExistsTimer(0);
      clearInterval(timer);
    }
  };

  return (
    <div className={`w-full relative bg-gray-900`}>
      <div className="hidden md:block">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="z-10 text-white hover:text-gray-300 cursor-pointer h-8 absolute top-1/2 left-8"
          style={{ fontSize: arrowSize }}
          onClick={prevSlide}
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          className="z-10 text-white hover:text-gray-300 cursor-pointer h-8 absolute top-1/2 right-8"
          style={{ fontSize: arrowSize }}
          onClick={nextSlide}
        />
        <div className="absolute z-10 flex flex-row gap-2 left-1/2 transform -translate-x-1/2 bottom-8">
          <FontAwesomeIcon
            icon={faPauseCircle}
            className="text-white hover:text-gray-300 cursor-pointer h-8"
            style={{ fontSize: arrowSize }}
            onClick={unmountTimer}
          />
          <FontAwesomeIcon
            icon={faPlayCircle}
            className="text-white hover:text-gray-300 cursor-pointer h-8"
            style={{ fontSize: arrowSize }}
            onClick={mountTimer}
          />
        </div>
      </div>
      <div className="w-full max-h-[400px]">
        {sliderData.map((slide: any, index: number) => (
          <div
            className={` transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "h-0 opacity-0"
            }`}
            key={index}
          >
            <img
              className="w-full max-h-[400px]"
              src={slide.image}
              alt="Carousel"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
