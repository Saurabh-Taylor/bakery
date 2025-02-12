"use client"
import { useState, useEffect, useRef, useId } from "react";

interface SlideData {
  title: string;
  button: string;
  src: any;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, title } = slide;

  return (
    <li
      ref={slideRef}
      className="relative w-full h-[80vh] flex-shrink-0"
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform:
          current !== index
            ? "scale(0.98) rotateX(8deg)"
            : "scale(1) rotateX(0deg)",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        transformOrigin: "bottom",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] overflow-hidden transition-all duration-150 ease-out"
        style={{
          transform:
            current === index
              ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
              : "none",
        }}
      >
        <img
          className="w-full h-full object-cover opacity-100 transition-opacity duration-600 ease-in-out"
          style={{
            opacity: current === index ? 1 : 0.5,
          }}
          alt={title}
          src={src.src}
          onLoad={imageLoaded}
          loading="eager"
          decoding="sync"
        />
        {current === index && (
          <div className="absolute inset-0 bg-black/30 transition-all duration-2000" />
        )}
      </div>
    </li>
  );
};

interface CarouselProps {
  slides: SlideData[];
  interval?: number; // Interval in milliseconds for autoplay
}

export function Carousel({ slides, interval = 3000 }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      handleNextClick();
    }, interval);

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [current, interval]);

  const id = useId();

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
      {/* Navigation controls */}
      
    </div>
  );
}
