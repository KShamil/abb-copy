import React from "react";
import { OurOffersProps } from "./OurOffers.props";
import styles from "./OurOffers.module.scss";
import { OfferCard } from "../OfferCard/OfferCard";

export const OurOffers = ({ offerCard }: OurOffersProps): JSX.Element => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2>Təkliflərimiz</h2>
        <div className={styles.offers}>
          {offerCard.map((item) => (
            <OfferCard offerCard={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
