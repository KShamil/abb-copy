import React from 'react'
import { KobCarouselProps } from './KobCarousel.props'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from './KobCarousel.module.scss';
import { KobSliderItems } from '@/components';
import { kobSliderData } from '@/data/data';

export const KobCarousel = ({...props}:KobCarouselProps):JSX.Element => {
  return (
    <>
    <div className={styles.carousel}>
      <Swiper
        navigation={false}
        modules={[Navigation, Pagination,Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        className={styles.mySwiper}
        loop={true}
        autoplay={{
          delay:4000
        }
          
        }
      >
        {kobSliderData && kobSliderData.map(item => (
            <SwiperSlide key={item.title}>
                <KobSliderItems props={item}/>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
  )
}
