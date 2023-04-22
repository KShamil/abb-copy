import React from "react";
import { NewsProps } from "./News.props";
import styles from "./News.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


export const News = ({ className, ...props }: NewsProps): JSX.Element => {
  return (
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
            <div className={styles.cardTitle}>
              <h3>Partnyorumuz olun</h3>
            </div>
            <div className={styles.cardLink}>
              <Link href="">Daha ətraflı</Link>
              <FontAwesomeIcon icon={faChevronRight} width={12} height={12} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
