import React from "react";
import styles from "./CorporativeBusiness.module.scss";
import { CorporativeBusinessProps } from "./CorporativeBusiness.props";
import { CorporativeCard } from "@/components";

export const CorporativeBusiness = ({
  corporativeCardData,
}: CorporativeBusinessProps): JSX.Element => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2>Korporativ biznes üçün təkliflər</h2>
        <div className={styles.corporative}>
          {corporativeCardData.map((item) => (
            <CorporativeCard key={item.title} corporativeCard={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
