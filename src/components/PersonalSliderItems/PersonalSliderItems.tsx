import React from "react";
import styles from './PersonalSliderItems.module.scss';
import { PersonalSliderItemsProps } from './PersonalSliderItems.props';
import Image from 'next/image';
import { Button } from '../Button/Button';

export const PersonalSliderItems = ({props}:PersonalSliderItemsProps):JSX.Element => {
    const {img,title,description,link} = props;
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
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};
