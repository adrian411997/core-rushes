import { useEffect, useState } from "react";

import background from "../../../assets/background.jpg";
import background2 from "../../../assets/background2.jpg";
import background3 from "../../../assets/background3.jpg";

import { CarouselWrapper, Slide, SlideTrack } from "./Portrait.styles";

export const Portrait = () => {
  const images = [background, background2, background3];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselWrapper>
      <SlideTrack data-testid="slide-track" currentIndex={currentIndex}>
        {images.map((image, index) => (
          <Slide key={index}>
            <img src={image} alt="portrait" />
          </Slide>
        ))}
      </SlideTrack>
    </CarouselWrapper>
  );
};
