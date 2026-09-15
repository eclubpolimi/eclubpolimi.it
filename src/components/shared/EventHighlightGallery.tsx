
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '../ui/dialog';
import type { SiteImageAsset } from '../../lib/contentful';

interface EventHighlightGalleryProps {
    highlightPhotos: SiteImageAsset[];
}

const EventHighlightGallery: React.FC<EventHighlightGalleryProps> = ({ highlightPhotos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    if (!highlightPhotos || highlightPhotos.length === 0) {
        return null;
    }

    // Seamless loop: [...last N, ...all, ...first N], N = min(3, total) so
    // small galleries can't index out of bounds.
    const cloneCount = Math.min(3, highlightPhotos.length);
    const clonedStart = Array.from({ length: cloneCount }, (_, i) =>
        highlightPhotos[highlightPhotos.length - cloneCount + i]
    );
    const clonedEnd = Array.from({ length: cloneCount }, (_, i) =>
        highlightPhotos[i]
    );
    const extendedPhotos = [
        ...clonedStart,
        ...highlightPhotos,
        ...clonedEnd,
    ];

    const handlePrev = () => {
        setIsAutoPlay(false);
        setCurrentIndex((prev) => prev - 1);
    };

    const handleNext = () => {
        setIsAutoPlay(false);
        setCurrentIndex((prev) => prev + 1);
    };

    const goToSlide = (index: number) => {
        setIsAutoPlay(false);
        // Offset by cloneCount: the extended array starts with cloneCount clones.
        setCurrentIndex(index + cloneCount);
    };

    // Seamless loop handling
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 4000);

        if (!isAutoPlay) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    // Track viewport size for responsive slide widths
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Init
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Jump to the real slide when landing on a clone
    useEffect(() => {
        if (currentIndex < cloneCount) {
            // Leading clones → corresponding real slide at the end
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(cloneCount + highlightPhotos.length - cloneCount + (currentIndex - 0));
            }, 700);
            return () => clearTimeout(timer);
        } else if (currentIndex >= cloneCount + highlightPhotos.length) {
            // Trailing clones → corresponding real slide at the start
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(cloneCount + (currentIndex - cloneCount - highlightPhotos.length));
            }, 700);
            return () => clearTimeout(timer);
        } else {
            setIsTransitioning(true);
            setIsAutoPlay(true);
        }
    }, [currentIndex, extendedPhotos.length, highlightPhotos.length, cloneCount]);

    // Center the active slide.
    // Desktop 320px slides, mobile 280px.
    const imageWidth = isMobile ? 280 : 320;
    const gap = isMobile ? 12 : 16;
    const itemWidth = imageWidth + gap;
    const offset = -(currentIndex * itemWidth) + (typeof window !== 'undefined' ? window.innerWidth / 2 - imageWidth / 2 : 0);

    return (
        <div
            className="w-full overflow-hidden"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
        >
            {/* Carousel container */}
            <div className="relative group">
                {/* Prev button */}
                <button
                    onClick={handlePrev}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-1.5 md:p-2 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                >
                    <ChevronLeft size={20} className="md:w-6 md:h-6" />
                </button>

                {/* Next button */}
                <button
                    onClick={handleNext}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-1.5 md:p-2 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                >
                    <ChevronRight size={20} className="md:w-6 md:h-6" />
                </button>

                {/* Carousel viewport */}
                <div
                    className="flex overflow-hidden"
                    style={{
                        maskImage: isMobile ? 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' : 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                        maskSize: '100% 100%',
                        maskRepeat: 'no-repeat',
                        WebkitMaskImage: isMobile ? 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' : 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                        WebkitMaskSize: '100% 100%',
                        WebkitMaskRepeat: 'no-repeat',
                    }}
                >
                    <div
                        className={`flex ${isMobile ? 'gap-3' : 'gap-4'} ${isTransitioning ? 'transition-all duration-700 ease-out' : ''}`}
                        style={{
                            transform: `translateX(${offset}px)`,
                        }}
                    >
                        {extendedPhotos.map((photo, index) => {
                            const isClone = index === 0 || index === extendedPhotos.length - 1;
                            const photoKey = `${photo.key}-${isClone ? 'clone-' + index : index}`;

                            return (
                                <Dialog key={photoKey}>
                                    <DialogTrigger asChild>
                                        <div className={`flex-shrink-0 ${isMobile ? 'w-72 h-40' : 'w-80 h-48'} bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl md:hover:scale-105 transition-all duration-300`}>
                                            <img
                                                src={photo.imageLightMode?.url ?? undefined}
                                                alt={photo.imageLightMode?.description || 'Gallery image'}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-4xl max-h-[85vh] flex items-center justify-center">
                                        <img
                                            src={photo.imageLightMode?.url ?? undefined}
                                            alt={photo.imageLightMode?.description || 'Gallery image'}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </DialogContent>
                                </Dialog>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4 md:mt-6">
                {highlightPhotos.map((_, index) => {
                    // 计算当前居中的真实图片索引
                    const realIndex = currentIndex - cloneCount;
                    const normalizedIndex = ((realIndex % highlightPhotos.length) + highlightPhotos.length) % highlightPhotos.length;
                    const isActive = normalizedIndex === index;

                    return (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`rounded-full transition-all duration-300 ${isActive
                                ? 'bg-brand w-3 h-3'
                                : 'bg-gray-300 hover:bg-gray-400 w-2 h-2'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default EventHighlightGallery;
