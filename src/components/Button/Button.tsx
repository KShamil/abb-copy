import React from 'react'
import { ButtonProps } from './Button.props'
import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = ({ appearance, children, className, ...props}: ButtonProps):JSX.Element => {
  return (
    <button className={cn(styles.button, className, {
        [styles.headerBtn]:appearance == 'header-btn',
        [styles.cardBtn]:appearance == 'card-btn',
        [styles.sliderBtn]:appearance == 'slider-btn',
        [styles.corporateSliderBtn]:appearance == 'corporate-slider-btn',
        [styles.creditBtn]:appearance == 'credit-btn',
    })}>
        {children}
    </button>
  )
}

