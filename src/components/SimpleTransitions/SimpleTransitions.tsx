import React from "react";
import { Card } from "../Card/Card";
import { SimpleTransitionsProps } from "./SimpleTransitions.props";
import styles from "./SimpleTransitions.module.scss";

export const SimpleTransitions = ({
  card,
}: SimpleTransitionsProps): JSX.Element => {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Sadə keçidlər</h2>
        </div>
        <div className={styles.content}>
          {card.map((c) => (
            <Card key={c.title} card={c} appearance="simple-card" />
          ))}
        </div>
      </section>
    </>
  );
};
