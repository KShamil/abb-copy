import { useSwiper } from 'swiper/react';

export function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext}>Slide to the next slide</button>
  );
}