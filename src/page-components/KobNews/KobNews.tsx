import React from "react";
import { KobNewsProps } from "./KobNews.props";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./KobNews.module.scss";

export const KobNews = ({...props}: KobNewsProps): JSX.Element => {
  return (
    <>
      <section className={styles.wrapper} {...props}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.title}>
              <h2>Xəbərlər</h2>
            </div>
            <div className={styles.news}>
              <div className={styles.newsCard}>
                <h3>“ASAN xidmət” ödənişlərini ABB mobile ilə növbəsiz ödə!</h3>
                <div className={styles.date}>
                  <span>28.03.2023</span>
                </div>
              </div>
              <div className={styles.newsCard}>
                <h3>ABB Sumqayıtda daha bir filial açdı!</h3>
                <div className={styles.date}>
                  <span>16.03.2023</span>
                </div>
              </div>
              <div className={styles.newsCard}>
                <h3>ABB-nin iştirakı ilə 1 milyon ağac əkiləcək!</h3>
                <div className={styles.date}>
                  <span>15.03.2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.card}>
              <div className={styles.cardLink}>
                <Link href="">Daha ətraflı</Link>
                <FontAwesomeIcon icon={faChevronRight} width={12} height={12} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
