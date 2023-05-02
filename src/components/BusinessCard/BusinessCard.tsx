import React from "react";
import styles from "./BusinessCard.module.scss";
import { BusinessCardProps } from "./BusinessCard.props";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { businessCardData } from '@/data/data';

export const BusinessCard = ({
  businessCardInfo,...props
}: BusinessCardProps): JSX.Element => {
  const { img, title, description, link } = businessCardInfo;
  
  return (
    <>
      <div className={styles.wrapper} {...props}>
        <div className={styles.image}>
          <Image src={img} alt={title} width={300} height={200} />
        </div>
        <div className={styles.info}>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <div className={styles.link}>
          <Link href="">{link}</Link>
          <FontAwesomeIcon className={styles.icon} icon={faChevronRight} width={12} height={12} />
        </div>
      </div>
    </>
  );
};
