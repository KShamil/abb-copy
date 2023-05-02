import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from './PersonalCarousel.module.scss';
import { PersonalSliderItems } from '@/components';
import { PersonalCarouselProps } from './PersonalCarousel.props';
import { personalSliderData } from '@/data/data';

export const PersonalCarousel = ({...props}:PersonalCarouselProps):JSX.Element => {
  return (
    <>
      <div className={styles.carousel} {...props}>
        <Swiper
          navigation={false}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          className={styles.mySwiper}
          loop={true}
          autoplay={{
            delay: 4000,
          }}
        >
          {personalSliderData && personalSliderData.map((item) => (
            <SwiperSlide key={item.title}>
              <PersonalSliderItems props={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
