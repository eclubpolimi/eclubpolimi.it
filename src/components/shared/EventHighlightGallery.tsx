
import React, { useState, useEffect, useRef } from 'react';
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
    const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

    if (!highlightPhotos || highlightPhotos.length === 0) {
        return null;
    }

    // 使用扩展的数组来创建无缝循环效果
    // 结构: [...last 3张, ...all, ...first 3张]
    const cloneCount = 3;
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
        setCurrentIndex(index + cloneCount); // +cloneCount because extended array has cloneCount itemsarray has cloneCount items before
    };

    // 处理无缝循环
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 4000);

        if (!isAutoPlay) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    // 监听窗口大小变化，更新移动端状态
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // 初始化
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 当到达克隆图片时，立即跳转到真实图片
    useEffect(() => {
        if (currentIndex < cloneCount) {
            // 到达前面的克隆，跳到末尾的真实图片
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(cloneCount + highlightPhotos.length - cloneCount + (currentIndex - 0));
            }, 700);
            return () => clearTimeout(timer);
        } else if (currentIndex >= cloneCount + highlightPhotos.length) {
            // 到达后面的克隆，跳到开头的真实图片
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

    // 计算偏移：使中间的图片居中
    // 响应式：桌面端320px，移动端280px
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
            {/* 轮播容器 */}
            <div className="relative group">
                {/* 左按钮 */}
                <button
                    onClick={handlePrev}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-1.5 md:p-2 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                >
                    <ChevronLeft size={20} className="md:w-6 md:h-6" />
                </button>

                {/* 右按钮 */}
                <button
                    onClick={handleNext}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-1.5 md:p-2 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                >
                    <ChevronRight size={20} className="md:w-6 md:h-6" />
                </button>

                {/* 轮播视图 */}
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
                            const originalIndex = isClone ? (index === 0 ? highlightPhotos.length - 1 : 0) : index - 1;
                            const photoKey = `${photo.key}-${isClone ? 'clone-' + index : index}`;

                            return (
                                <Dialog key={photoKey}>
                                    <DialogTrigger asChild>
                                        <div className={`flex-shrink-0 ${isMobile ? 'w-72 h-40' : 'w-80 h-48'} bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl md:hover:scale-105 transition-all duration-300`}>
                                            <img
                                                src={photo.imageLightMode?.url}
                                                alt={photo.imageLightMode?.description || 'Gallery image'}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-4xl max-h-[85vh] flex items-center justify-center">
                                        <img
                                            src={photo.imageLightMode?.url}
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

            {/* 指示点 */}
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
                                ? 'bg-[#FC3F1A] w-3 h-3'
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
