import React from "react";
import { CardProps } from "./Card.props";
import styles from "./Card.module.scss";
import cn from "classnames";
import { Button } from "../Button/Button";
import Image from "next/image";

export const Card = ({
  card,
  appearance,
  className,
  ...props
}: CardProps): JSX.Element => {
  const { img, title, description, buttonText } = card;
  return (
    <div
      className={cn(styles.card, className, {
        [styles.simpleCard]: appearance == "simple-card"
      })}
      {...props}
    >
      <div className={styles.left}>
        <div className={styles.info}>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <Button className={styles.btn} appearance="card-btn">{buttonText}</Button>
      </div>
      <div className={styles.right}>
        <Image className={styles.img} src={img} alt={title} width={117} height={190} />
      </div>
    </div>
  );
};
