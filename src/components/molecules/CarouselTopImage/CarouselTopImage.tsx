import React, { useState, useRef, useEffect } from "react";
import {
  Dots,
  MainSlideContainer,
  CenteredDiv,
  NumberText,
  StyledCaptionText,
  ImageSlide,
} from "./CarouselComponents";
import "./CarouselTopImage.css";

const CarouselTopImage = ({ Images }: {Images: Array<string>}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const [currentSlide, setCurrentSlide] = useState({
    image: "./../../../static/images/ContactUs1.jpg",
    text: "First image",
  });

  useEffect(() => {
    Images?.length > 0 && setCurrentSlide({image: Images[currentSlideIndex], text:`${currentSlide} image`});
  }, [currentSlideIndex]);

  useEffect(() => {
    Images?.length > 0 && setCurrentSlide({image: Images[currentSlideIndex], text:`${currentSlide} image`});
  }, [Images.length]);

  function showSlides(n: number) {
    const newIndex = currentSlideIndex + n;
    if (newIndex >= Images.length) {
      setCurrentSlideIndex(0);
    } else if (newIndex < 0) {
      setCurrentSlideIndex(Images.length - 1);
    } else {
      setCurrentSlideIndex(newIndex);
    }
  }

  return (
    <>
      {Images?.length >= 0 && (
        <div>
          <MainSlideContainer>
            <div>
              <NumberText>{`${currentSlideIndex + 1} / ${
                Images?.length
              }`}</NumberText>
              <ImageSlide src={currentSlide?.image} />
              <StyledCaptionText variant="h3">
                {currentSlide?.text}
              </StyledCaptionText>
            </div>
            <a className="prev" onClick={() => showSlides(-1)}>
              &#10094;
            </a>
            <a className="next" onClick={() => showSlides(1)}>
              &#10095;
            </a>
          </MainSlideContainer>
          <br />
          <CenteredDiv>
            {Images.map((index:number) => {
              return (
                <Dots
                  key = {index}
                  onClick = { _ => setCurrentSlideIndex(index)}
                ></Dots>
              );
            })}
          </CenteredDiv>
        </div>
      )}
    </>
  );
};

export default CarouselTopImage;
