import React, { useEffect, useState } from 'react';
import {
  faArrowRight,
  faArrowLeft,
  faPlayCircle,
  faPauseCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

type CarouselSlide = {
  image: string;
  alt: string;
};

type CarouselProps = {
  sliderData: CarouselSlide[];
  autoplay: number;
  className?: string;
  height?: number;
  verticalPosition?: number;
};

const Carousel = ({
  sliderData,
  autoplay,
  height = 300,
  verticalPosition = 50,
}: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const arrowSize = '40px';

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev < sliderData.length - 1 ? prev + 1 : 0));
      }, autoplay);
      setTimer(interval);
      return () => clearInterval(interval);
    }
  }, [isPaused, autoplay, sliderData.length]);

  const nextSlide = () => {
    setCurrent(current < sliderData.length - 1 ? current + 1 : 0);
  };

  const prevSlide = () => {
    setCurrent(current > 0 ? current - 1 : sliderData.length - 1);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    if (timer) {
      clearInterval(timer);
      setTimer(null);
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
            icon={isPaused ? faPlayCircle : faPauseCircle}
            className="text-white hover:text-gray-300 cursor-pointer h-8"
            style={{ fontSize: arrowSize }}
            onClick={togglePause}
          />
        </div>
      </div>
      <div className="w-full" style={{ maxHeight: `${height}px` }}>
        {sliderData.map((slide: CarouselSlide, index: number) => (
          <div
            className={` transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'h-0 opacity-0'
            } w-full`}
            style={{ height: `${height}px` }}
            key={index}
          >
            <Image
              className="object-cover"
              src={slide.image}
              alt="Carousel"
              fill
              style={{ objectPosition: `center ${verticalPosition}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
