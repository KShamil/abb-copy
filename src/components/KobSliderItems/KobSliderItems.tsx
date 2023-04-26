import React from "react";
import styles from "./KobSliderItems.module.scss";
import { Button } from "../Button/Button";
import { KobSliderItemsProps } from "./KobSliderItems.props";
import Image from 'next/image';

export const KobSliderItems = ({ props }: KobSliderItemsProps) => {
  const { img, title, description, link } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h2>{title}</h2>
        <span>{description}</span>
        <div>
          <Button appearance="slider-btn">{link}</Button>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          className={styles.img}
          src={img}
          alt="error"
          width={576}
          height={500}
          priority={true}
        />
      </div>
    </div>
  );
};
