import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from './CorporateCarousel.module.scss';
import { CorporateCarouselProps } from './CorporateCarousel.props';
import { CorporateSliderItems } from '@/components';
import { corporateSliderData } from '@/data/data';

export const CorporateCarousel = ({...props}:CorporateCarouselProps):JSX.Element => {
  return (
    <>
    <div className={styles.carousel} {...props}>
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
        {corporateSliderData && corporateSliderData.map(item => (
            <SwiperSlide key={item.title}>
                <CorporateSliderItems props={item}/>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
  )
}
