import React from 'react'
import { OfferCardProps } from './OfferCard.props'
import styles from './OfferCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const OfferCard = ({ offerCard }:OfferCardProps):JSX.Element => {
    const { img, title, description, link } = offerCard;
  return (
    <div className={styles.wrapper}>
        <div className={styles.image}>
            <Image className={styles.photo} src={img} alt={title} width={390} height={250} />
        </div>
        <div className={styles.info}>
            <h4>{title}</h4>
            <div className={styles.description}><span>{description}</span></div>
            <div className={styles.link}>
                <div><Link href="">{link}</Link></div>
                <FontAwesomeIcon className={styles.icon} icon={faChevronRight} width={12} height={12} />
            </div>
        </div>
    </div>
  )
}
