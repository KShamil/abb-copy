import React from "react";
import { Card } from "../Card/Card";
import { SimpleTransitionsProps } from "./SimpleTransitions.props";
import styles from "./SimpleTransitions.module.scss";
import { cardData } from "@/data/data";

export const SimpleTransitions = ({...props}: SimpleTransitionsProps): JSX.Element => {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Sadə keçidlər</h2>
        </div>
        <div className={styles.content}>
          {cardData &&
            cardData.map((c) => (
              <Card key={c.title} card={c} appearance="simple-card" />
            ))}
        </div>
      </section>
    </>
  );
};
