import React from "react";
import styles from "./CorporateSliderItems.module.scss";
import { CorporateSliderItemsProps } from "./CorporateSliderItems.props";
import { Button } from "../Button/Button";
import Image from "next/image";

export const CorporateSliderItems = ({
  props,
}: CorporateSliderItemsProps): JSX.Element => {
  const { img, title, description, link } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h2>{title}</h2>
        <span>
          {description}
        </span>
        <div>
          <Button appearance="corporate-slider-btn">{link}</Button>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          className={styles.img}
          src={img}
          alt="error"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};
