import "./MyCarousel.css";
import { Carousel } from "nuka-carousel";

export const MyCarousel = () => {
  return (
    <>
      <Carousel autoplay showDots>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    </>
  );
};
