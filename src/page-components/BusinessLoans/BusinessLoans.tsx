import React from "react";
import { BusinessLoansProps } from "./BusinessLoans.props";
import styles from "./BusinessLoans.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const BusinessLoans = ({
  ...props
}: BusinessLoansProps): JSX.Element => {
  return (
    <>
      <section className={styles.wrapper} {...props}>
        <div className={styles.top}>
          <h2>Biznes kreditləri</h2>
        </div>
        <div className={styles.bottom}>
          <div className={styles.info}>
            <span>Əmanət təminatlı kredit</span>
            <div className={styles.link}>
              <Link href="">Daha ətraflı</Link>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.icon}
                width={12}
                height={12}
              />
            </div>
          </div>
          <div className={styles.info}>
            <span>İnvoysların maliyyələşdirilməsi</span>
            <div className={styles.link}>
              <Link href="">Daha ətraflı</Link>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.icon}
                width={12}
                height={12}
              />
            </div>
          </div>
          <div className={styles.info}>
            <span>E-COM və E-POS terminal kredit xətti</span>
            <div className={styles.link}>
              <Link href="">Daha ətraflı</Link>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.icon}
                width={12}
                height={12}
              />
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.link}>
              <Link href="">Bütün kreditlər</Link>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.icon}
                width={12}
                height={12}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
