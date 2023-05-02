import React from "react";
import { OurOffersProps } from "./OurOffers.props";
import styles from "./OurOffers.module.scss";
import { OfferCard } from "../OfferCard/OfferCard";
import { offersCardData } from '@/data/data';

export const OurOffers = ({...props}: OurOffersProps): JSX.Element => {
  return (
    <section className={styles.wrapper} {...props}>
      <div className={styles.content}>
        <h2>Təkliflərimiz</h2>
        <div className={styles.offers}>
          {offersCardData && offersCardData.map((item) => (
            <OfferCard offerCard={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
