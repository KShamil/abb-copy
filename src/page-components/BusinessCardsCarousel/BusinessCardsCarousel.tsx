import React from "react";
import { BusinessCardsCarouselProps } from "./BusinessCardsCarousel.props";
import styles from "./BusinessCardsCarousel.module.scss";
import { BusinessCard, BusinessCardCarouselItems } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const BusinessCardsCarousel = ({
  props,
}: BusinessCardsCarouselProps): JSX.Element => {
  return (
    <>
      <section className={styles.wrapper}>
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
            el:'.myPagination'
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        >
              {props && props.map(item => (
                <SwiperSlide key={item.img} className={styles.businessCards}>
                  <BusinessCard businessCardInfo={item}/>
                </SwiperSlide>
              ))}
        </Swiper>

      </section>
    </>
  );
};
