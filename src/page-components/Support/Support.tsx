import React from "react";
import styles from "./Support.module.scss";
import { SupportProps } from "./Support.props";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import FirstImg from "./sahibkarlar_klubu.png";
import SecondImg from "./sahibkart.png";

export const Support = ({ ...props }: SupportProps): JSX.Element => {
  return (
    <>
      <div className={styles.wrapper} {...props}>
        <div className={styles.leftCard}>
          <div className={styles.info}>
            <h2>Fayda və Dəstək</h2>
            <span>Sahibkarlar klubu ilə dəstəyimizdən faydalanın</span>
            <div className={styles.link}>
              <Link href="">
                <FontAwesomeIcon icon={faArrowRight} width={25} height={25} />
              </Link>
            </div>
          </div>
          <div className={styles.image}>
            <Image
              className={styles.img}
              src={FirstImg}
              alt="error"
              width={262}
              height={346}
            />
          </div>
        </div>
        <div className={styles.rightCard}>
          <div className={styles.info}>
            <h2>Sahibkart</h2>
            <span>Biznes ödənişlərinizi Sahibkart ilə edin</span>
            <div className={styles.link}>
              <Link href="">
                <FontAwesomeIcon icon={faArrowRight} width={25} height={25} />
              </Link>
            </div>
          </div>
          <div className={styles.image}>
            <Image
              className={styles.img}
              src={SecondImg}
              alt="error"
              width={260}
              height={346}
            />
          </div>
        </div>
      </div>
    </>
  );
};
