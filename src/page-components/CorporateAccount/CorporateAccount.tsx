import React from "react";
import { CorporateAccountProps } from "./CorporateAccount.props";
import styles from "./CorporateAccount.module.scss";
import Link from "next/link";
import Image from "next/image";
import FirstImg from "./online-account.png";
import SecondImg from './laptop-man.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const CorporateAccount = ({...props}: CorporateAccountProps): JSX.Element => {
  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.leftCard}>
        <div className={styles.info}>
          <h2>Məsafədən korporativ hesab</h2>
          <span>Korporativ hesabınızı banka gəlmədən açın</span>
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
          <h2>InternetBank</h2>
          <span>Bir toxunuşla bankınız hər zaman yanınızda</span>
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
  );
};
