import React from "react";
import { InnovationProps } from "./Innovation.props";
import styles from "./Innovation.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FirstImg from "./img1.webp";
import SecondImg from "./img2.webp";
import Image from "next/image";

export const Innovation = ({}: InnovationProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftCard}>
        <div className={styles.info}>
          <h2>
            İnnovativ ideyalarınızı ABB <br /> İnnovasiya Mərkəzi ilə reallaşdırın
          </h2>
          <div className={styles.link}>
            <Link href="">Daha ətraflı</Link>
            <FontAwesomeIcon icon={faChevronRight} width={12} height={12} />
          </div>
        </div>
        <div className={styles.image}>
            <Image className={styles.img} src={FirstImg} alt='error' width={262} height={346}/>
        </div>
      </div>
      <div className={styles.rightCard}>
        <div className={styles.info}>
          <h2>ABB Link-lə 2 günə virtual<br />POS-terminal sahibi olun</h2>
          <div className={styles.link}>
            <Link href="">Daha ətraflı</Link>
            <FontAwesomeIcon icon={faChevronRight} width={12} height={12} />
          </div>
        </div>
        <div className={styles.image}>
          <Image className={styles.img} src={SecondImg} alt="error" width={260} height={346} />
        </div>
      </div>
    </div>
  );
};
