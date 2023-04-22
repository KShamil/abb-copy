import React from 'react'
import styles from './OtherOperations.module.scss'
import { OtherOperationsProps } from './OtherOperations.props'
import { OperationsCard } from '@/components'

export const OtherOperations = ({props}:OtherOperationsProps):JSX.Element => {
  return (
    <section className={styles.wrapper}>
    <div className={styles.content}>
      <h2>Digər əməliyyatlar</h2>
      <div className={styles.operations}>
        {props.map((item) => (
          <OperationsCard key={item.title} props={item} />
        ))}
      </div>
    </div>
  </section>
  )
}
