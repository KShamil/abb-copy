import React from "react";
import { BusinessCardCarouselItemsProps } from "./BusinessCardCarouselItems.props";
import { BusinessCard } from "../BusinessCard/BusinessCard";
import styles from "./BusinessCardCarouselItems.module.scss";

export const BusinessCardCarouselItems = ({
  props,
}: BusinessCardCarouselItemsProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {props && props.map((item) => (
        <BusinessCard key={item.title} businessCardInfo={item} />
      ))}
    </div>
  );
};
