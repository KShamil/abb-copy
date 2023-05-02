import React from "react";
import { TradeFinanceProps } from "./TradeFinance.props";
import styles from "./TradeFinance.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import DocumentIcon from "./document.svg";
import Image from "next/image";

export const TradeFinance = ({ ...props }: TradeFinanceProps): JSX.Element => {
  return (
    <>
      <section className={styles.wrapper} {...props}>
        <div className={styles.top}>
          <h2>Sənədli əməliyyatlar</h2>
        </div>
        <div className={styles.bottom}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image src={DocumentIcon} alt="error" width={24} height={24} />
            </div>
            <div className={styles.info}>
              <h4>Akkreditiv</h4>
              <span>
                Beynəlxalq hesablaşmaların ən təhlükəsiz və təminatlı forması
              </span>
              <div className={styles.link}>
                <Link href="">Daha ətraflı</Link>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.linkIcon}
                  width={12}
                  height={12}
                />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image src={DocumentIcon} alt="error" width={24} height={24} />
            </div>
            <div className={styles.info}>
              <h4>Qarantiya</h4>
              <span>
                Tərəfdaşlar arasında öhdəliklərin yerinə yetirilməsinə zəmanət
              </span>
              <div className={styles.link}>
                <Link href="">Daha ətraflı</Link>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.linkIcon}
                  width={12}
                  height={12}
                />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image src={DocumentIcon} alt="error" width={24} height={24} />
            </div>
            <div className={styles.info}>
              <h4>İnkasso</h4>
              <span>
                İxrac və ya idxal edən müştərilərimiz üçün rahat hesablaşma növü
              </span>
              <div className={styles.link}>
                <Link href="">Daha ətraflı</Link>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.linkIcon}
                  width={12}
                  height={12}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
