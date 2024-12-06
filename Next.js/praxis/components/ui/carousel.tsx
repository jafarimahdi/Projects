import React, { useState, ReactNode } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

interface CarouselItemProps {
  children: ReactNode;
}

interface CarouselButtonProps {
  onClick: () => void;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({ children, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? childrenArray.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === childrenArray.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={`${styles.carousel} ${className}`}>
      <button className={styles.carouselPrevious} onClick={handlePrevious}>
        Previous
      </button>
      <div className={styles.carouselContent} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {childrenArray.map((child, index) => (
          <div key={index} className={styles.carouselItem}>
            {child}
          </div>
        ))}
      </div>
      <button className={styles.carouselNext} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return <div className={styles.carouselItem}>{children}</div>;
};

export const CarouselPrevious: React.FC<CarouselButtonProps> = ({ onClick, className }) => {
  return (
    <button className={`${styles.carouselPrevious} ${className}`} onClick={onClick}>
      Previous
    </button>
  );
};

export const CarouselNext: React.FC<CarouselButtonProps> = ({ onClick, className }) => {
  return (
    <button className={`${styles.carouselNext} ${className}`} onClick={onClick}>
      Next
    </button>
  );
};

export const CarouselContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.carouselContent}>{children}</div>;
};


