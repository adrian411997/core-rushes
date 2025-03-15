import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const SlideTrack = styled.div<{ currentIndex: number }>`
  display: flex;
  width: 100%;
  height: 100%;
  transform: translateX(${(props) => -props.currentIndex * 100}%);
  transition: transform 1s ease-in-out;
`;

// Cada imagen (contenedor hijo)
export const Slide = styled.div`
  flex: 0 0 100%; 
  height: 100%;
  width: 50%;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
