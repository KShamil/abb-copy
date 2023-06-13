import React from "react";
import { BusinessCardsCarouselProps } from "./BusinessCardsCarousel.props";
import styles from "./BusinessCardsCarousel.module.scss";
import { BusinessCard } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { businessCardData } from "@/data/data";

export const BusinessCardsCarousel =
  ({}: BusinessCardsCarouselProps): JSX.Element => {
    return (
      <>
        <section className={styles.wrapper}>
          <Swiper
            navigation={true}
            modules={[Navigation, Pagination]}
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={100}
            className='swiper'
            pagination={{
              clickable: true,
              el: ".myPagination",
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
                slidesPerView: 4,
                spaceBetween: 100,
              },
            }}
          >
            {businessCardData &&
              businessCardData.map((item) => (
                <SwiperSlide key={item.img} className={styles.businessCards}>
                  <BusinessCard businessCardInfo={item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
      </>
    );
  };
