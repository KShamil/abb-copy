import React, { useEffect, useRef, useState } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";
import {
  faChevronDown,
  faCircleArrowRight,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoIcon from "./logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button, MobileAccordion } from "@/components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export const Header: React.FC = ({}: HeaderProps): JSX.Element => {
  const [openSeacrh, setOpenSearch] = useState<boolean>(false);
  const [isBlockVisible, setBlockVisible] = useState<boolean>(true);
  const [prevScrollY, setPrevScrollY] = useState<number>(0);
  const [isCreditMenuVisible, setIsCreditMenuVisible] =
    useState<boolean>(false);
  const [isMortgageMenuVisible, setIsMortgageMenuVisible] =
    useState<boolean>(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCreditLinkHover = () => {
    clearTimeout(hoverTimeoutRef.current!);
    setIsCreditMenuVisible(true);
  };

  const handleCreditLinkLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsCreditMenuVisible(false);
    }, 50); // Задаем задержку в миллисекундах (в данном случае 200 мс)
  };
  // Обработчик события наведения на блок с классом "subMenu"
  const handleCreditMenuHover = () => {
    clearTimeout(hoverTimeoutRef.current!); // Очищаем timeout, чтобы блок оставался открытым
    setIsCreditMenuVisible(true); // Оставляем блок с классом "subMenu" отображенным
  };
  // Обработчик события уведения курсора от блока с классом "subMenu"
  const handleCreditMenuLeave = () => {
    setIsCreditMenuVisible(false); // Скрываем блок с классом "subMenu"
  };

  const handleMortgegeLinkHover = () => {
    clearTimeout(hoverTimeoutRef.current!);
    setIsMortgageMenuVisible(true);
  };

  const handleMortgageLinkLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsMortgageMenuVisible(false);
    }, 50); // Задаем задержку в миллисекундах (в данном случае 200 мс)
  };

  const handleMortgageMenuHover = () => {
    clearTimeout(hoverTimeoutRef.current!);
    setIsMortgageMenuVisible(true);
  };
  const handleMortgageMenuLeave = () => {
    setIsMortgageMenuVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY >= 50 && prevScrollY < scrollY) {
        setBlockVisible(false);
      } else {
        setBlockVisible(true);
      }
      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const handleOpenSeacrh = () => {
    setOpenSearch((prev) => !prev);
  };

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isBlockVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          pointerEvents: isBlockVisible ? "auto" : "none",
        }}
      >
        {isBlockVisible && (
          <div className={styles.top}>
            <div className={styles.left}>
              <nav className={styles.nav}>
                <ul className={styles.navList}>
                  <li>
                    <Link className={styles.link} href="#">
                      Tender elanları
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="#">
                      Haqqımızda
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="#">
                      Tariflər və Standart şərtlər
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="#">
                      Xəbərlər
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="#">
                      Xidmət şəbəkəsi
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="#">
                      Onlayn xidmətlər
                    </Link>
                  </li>
                </ul>
              </nav>
              <Link href="https://careers.abb-bank.az/?_gl=1*1xoqd9z*_ga*MTk2MDU3MjE5NC4xNjc4MDkwNjgz*_ga_XS2V03MMNQ*MTY4MDI4ODgwMS4xMS4xLjE2ODAyOTAwNzAuOC4wLjA.">
                <Button appearance="header-btn">Karyera portalı</Button>
              </Link>
            </div>
            <div className={styles.center}>
              <ul className={styles.centerList}>
                <li>
                  <Link
                    href="/"
                    className={`${styles.centerLink} ${
                      router.pathname === "/" ? styles.activeLink : ""
                    }`}
                  >
                    Fərdi
                  </Link>
                </li>
                <span className={styles.divider}>/</span>
                <li>
                  <Link
                    href="/corporative"
                    className={`${styles.centerLink} ${
                      router.pathname === "/corporative"
                        ? styles.activeLink
                        : ""
                    }`}
                  >
                    Korporativ
                  </Link>
                </li>
                <span className={styles.divider}>/</span>
                <li>
                  <Link
                    href="/kob"
                    className={`${styles.centerLink} ${
                      router.pathname === "/kob" ? styles.activeLink : ""
                    }`}
                  >
                    KOB
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.right}>
              <ul className={styles.list}>
                <li onClick={handleOpenSeacrh} className={styles.listItem}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={styles.searchIcon}
                  />
                  <span>Axtarış</span>
                </li>
                <li className={styles.listItem}>
                  <span>AZ</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={styles.arrow}
                  />
                </li>
                <li className={styles.listItem}>
                  <FontAwesomeIcon icon={faPhone} className={styles.phone} />
                  <span>937</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </motion.div>
      <div className={styles.middle}>
        <div className={styles.middleLeft}>
          <div className={styles.logo}>
            <Image
              className={styles.img}
              src={LogoIcon}
              alt="error"
              width={110}
              height={50}
              priority={true}
            />
          </div>
          <ul className={styles.middleList}>
            <li>
              <Link
                href="/"
                className={`${styles.middleLink} ${
                  router.pathname === "/" ? styles.activeLink : ""
                }`}
              >
                Fərdi
              </Link>
            </li>
            <span className={styles.divider}>/</span>
            <li>
              <Link
                href="/corporative"
                className={`${styles.middleLink} ${
                  router.pathname === "/corporative" ? styles.activeLink : ""
                }`}
              >
                Korporativ
              </Link>
            </li>
            <span className={styles.divider}>/</span>
            <li>
              <Link
                href="/kob"
                className={`${styles.middleLink} ${
                  router.pathname === "/kob" ? styles.activeLink : ""
                }`}
              >
                KOB
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.middleRight}>
          <Link href="" className={styles.internetBanking}>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className={styles.icon}
            />
            <span>İnternet Bankçılıq</span>
          </Link>
          <button
            className={`${styles.mobileMenuBtn} ${
              isOpen ? styles.closeMobileBtn : ""
            }`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: openSeacrh ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            pointerEvents: openSeacrh ? "auto" : "none",
          }}
          className={styles.search}
        >
          {openSeacrh && (
            <div>
              <input placeholder="Sizə necə kömək edə bilərik?" type="text" />
            </div>
          )}
        </motion.div>
      </div>
      <div className={styles.bottom}>
        <Link
          onMouseEnter={handleCreditLinkHover}
          onMouseLeave={handleCreditLinkLeave}
          href=""
          className={styles.link}
        >
          Kreditlər
        </Link>

        <Link
          onMouseEnter={handleMortgegeLinkHover}
          onMouseLeave={handleMortgageLinkLeave}
          href=""
          className={styles.link}
        >
          İpoteka
        </Link>

        <Link href="" className={styles.link}>
          Əmanətlər
        </Link>

        <Link href="" className={styles.link}>
          Kartlar
        </Link>

        <Link href="" className={styles.link}>
          köçürmələri
        </Link>

        <Link href="" className={styles.link}>
          Cari hesab
        </Link>

        <Link href="" className={styles.link}>
          Elektron xidmətlər
        </Link>

        <Link href="" className={styles.link}>
          Bank 24/7
        </Link>

        <Link href="" className={styles.link}>
          QayğıCash klubu
        </Link>

        <Link href="" className={styles.link}>
          Avtomatik endirim
        </Link>

        <Link href="" className={styles.link}>
          Kampaniyalar
        </Link>

        {isCreditMenuVisible && (
          <div
            className={styles.creditMenu}
            onMouseEnter={handleCreditMenuHover}
            onMouseLeave={handleCreditMenuLeave}
          >
            <div className={styles.left}>
              <div className={styles.links}>
                <Link href="">Online kredit al</Link>
                <Link href="">Əmanətçi kredit limiti</Link>
                <Link href="">Kart üzrə kredit limiti</Link>
              </div>
              <div className={styles.links}>
                <Link href="">Nağd kredit</Link>
                <Link href="">Əmanətçi nağd krediti</Link>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.img}>
                <Image
                  src="https://abb-bank.az/storage/uploads/1596884229_Kredit_sub_iba.png"
                  width={347}
                  height={217}
                  alt="error"
                />
              </div>
              <div className={styles.info}>
                <h4>Onlayn kredit sifarişi</h4>
                <span>Bütün ehtiyaclarınız üçün nağd pul krediti</span>
                <Button appearance="slider-btn">Daha ətraflı</Button>
              </div>
            </div>
          </div>
        )}

        {isMortgageMenuVisible && (
          <div
            className={styles.mortgageMenu}
            onMouseEnter={handleMortgageMenuHover}
            onMouseLeave={handleMortgageMenuLeave}
          >
            <div className={styles.left}>
              <div className={styles.links}>
                <Link href="">Daxili ipoteka krediti</Link>
                <Link href="">Tikinti krediti</Link>
                <Link href="">İpoteka kalkulyatoru</Link>
                <Link href="">
                  Azərbaycan Respublikasının İpoteka və Kredit Zəmanət Fondunun
                  vəsaiti hesabına verilən ipoteka kreditləri
                </Link>
                <Link href="">Hədiyyə Sertifikatı</Link>
              </div>
              <div className={styles.links}>
                <Link href="">Mənzil krediti</Link>
                <Link href="">ƏƏmanətli ipoteka krediti</Link>
                <Link href="">Partnyor olun</Link>
                <Link href="">
                  Azərbaycan Respublikasının İpoteka və Kredit Zəmanət Fondunun
                  vəsaiti hesabına verilən güzəştli (MİDA) ipoteka kreditləri
                </Link>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.img}>
                <Image
                  src="https://abb-bank.az/storage/uploads/1666274928_ipoteka-02.png"
                  width={347}
                  height={217}
                  alt="error"
                />
              </div>
              <div className={styles.info}>
                <h4>Onlayn ipoteka müraciəti</h4>
                <span>
                  Aylıq ipoteka ödənişinizi hesablayın və müraciət edin
                </span>
                <Button appearance="slider-btn">Daha ətraflı</Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`${styles.mobileMenu} ${
          isOpen ? styles.showMobileMenu : ""
        }`}
      >
        <div className={styles.mobileInternetBankingContainer}>
          <Link href="" className={styles.mobileInternetBanking}>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className={styles.icon}
            />
            <span>İnternet Bankçılıq</span>
          </Link>
        </div>
        <MobileAccordion/>
      </div>
    </header>
  );
};
