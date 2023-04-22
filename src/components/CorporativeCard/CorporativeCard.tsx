import React from "react";
import { CorporativeCardProps } from "./CorporativeCard.props";
import styles from "./CorporativeCard.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const CorporativeCard = ({
  corporativeCard,
}: CorporativeCardProps): JSX.Element => {
  const { img, title, description, link } = corporativeCard;
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          className={styles.photo}
          src={img}
          alt={title}
          width={390}
          height={250}
        />
      </div>
      <div className={styles.info}>
        <h4>{title}</h4>
        <div className={styles.description}>
          <span>{description}</span>
        </div>
        <div className={styles.link}>
          <div>
            <Link href="">{link}</Link>
          </div>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faChevronRight}
            width={12}
            height={12}
          />
        </div>
      </div>
    </div>
  );
};
