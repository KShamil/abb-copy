import React from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Logo from "./smallLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import AppleIcon from "./app-store.svg";
import PlayStore from "./play-store.svg";
import Huawei from "./huawei.svg";
import LogoInfoBank from "./logo-infobank.png";
import logoVirtualQarabag from "./logo-virtual-qarabag.png";
import LOgoMsp from "./logo-msp.png";
import NewLogo from "./yenilogo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer: React.FC = ({}: FooterProps): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Image src={Logo} alt="error" width={77} height={35} />
        </div>
        <div className={styles.internetBanking}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faCircleArrowRight}
            width={24}
            height={24}
          />
          <span>İnternet Bankçılıq</span>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.middleTop}>
          <ul className={styles.list}>
            <h4>Fərdi</h4>
            <li>
              <Link className={styles.link} href="">
                Avtomatik endirim
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                İpoteka
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Cari hesab
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Elektron xidmətlər
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Əmanətlər
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                QayğıCash klubu
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Pul köçürmələri
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Kartlar
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Kreditlər
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Bank 24/7
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Kampaniyalar
              </Link>
            </li>
          </ul>
          <ul className={styles.list}>
            <h4>Haqqımızda</h4>
            <li>
              <Link className={styles.link} href="">
                Siyasətlərimiz
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Brend mərkəzi
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Maliyyə monitorinqi və <br /> komplayns
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Təklif və şikayətlər
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Tender elanları
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Mükafatlar
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                İnsan Resursları
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Missiya və strateji baxış
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Korporativ Sosial <br /> Məsuliyyət / Sponsorluq
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Müxbir banklar
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Törəmə və asılı <br /> müəssisələrdə iştirak payı
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Məlumatların açıqlanması
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Rəhbərlik
              </Link>
            </li>
          </ul>
          <ul className={styles.list}>
            <h4>Korporativ</h4>
            <li>
              <Link className={styles.link} href="">
                Əməkhaqqı layihəsi
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Elektron bankçılıq
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Hesablar
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Ödəniş kartları
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Sənədli əməliyyatlar
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Köçürmələr
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Əmanətlər
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Məsafədən hesab aç
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Korporativ kreditlər
              </Link>
            </li>
          </ul>
          <ul className={styles.list}>
            <h4>KOB</h4>
            <li>
              <Link className={styles.link} href="">
                Xidmət paketləri
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Əmanətlər
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Sahibkarlar Klubu
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Hesablar
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Ödəniş kartları
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Elektron bankçılıq
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Köçürmələr
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Sənədli əməliyyatlar
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                ABB Link
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Məsafədən hesab aç
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Biznes kreditləri
              </Link>
            </li>
          </ul>
          <ul className={styles.list}>
            <h4>Maliyyə və İnvestisiya</h4>
            <li>
              <Link className={styles.link} href="">
                Hesabatlar
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Digər məlumatlar
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Təqdimatlar
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Reytinqlər
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Səhmdarlar
              </Link>
            </li>
          </ul>
          <ul className={styles.list}>
            <h4>Əlaqə</h4>
            <li>
              <Link className={styles.link} href="">
                Nizami küç. 67, AZ1005 <br /> Bakı, Azərbaycan
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Tel.:(+994 12) 493 00 91
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Faks.:(+994 12) 493 40 91
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                E-poçt:info@abb-bank.az
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                <FontAwesomeIcon icon={faPhone} width={12} height={12} />{" "}
                <span className={styles.bold}>937</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.middleCenter}>
          <div className={styles.mobileApp}>
            <div className={styles.box}>
              <Image
                className={styles.icon}
                src={AppleIcon}
                alt="error"
                width={24}
                height={24}
              />
              <div className={styles.info}>
                <span>Mobil tətbiqi yüklə</span>
                <span>App Store</span>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                className={styles.icon}
                src={PlayStore}
                alt="error"
                width={24}
                height={24}
              />
              <div className={styles.info}>
                <span>Mobil tətbiqi yüklə</span>
                <span>Google Play</span>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                className={styles.icon}
                src={Huawei}
                alt="error"
                width={24}
                height={24}
              />
              <div className={styles.info}>
                <span>Mobil tətbiqi yüklə</span>
                <span>App Gallery</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.middleBottom}>
          <div>
            <span>© ABB - Bütün hüquqlar qorunur</span>
          </div>
          <div className={styles.logos}>
            <Image src={LogoInfoBank} alt="error" width={29} height={26} />
            <Image
              src={logoVirtualQarabag}
              alt="error"
              width={35}
              height={26}
            />
            <Image src={NewLogo} alt="error" width={35} height={26} />
            <Image src={LOgoMsp} alt="error" width={48} height={26} />
          </div>
          <div className={styles.icons}>
            <Link href="https://www.instagram.com/abb_bank/" target='_blank'>
              <InstagramIcon className={styles.instagram} />
            </Link>
            <Link href="https://www.facebook.com/abbbank.az" target='_blank'>
              <FacebookIcon className={styles.facebook} />
            </Link>
            <Link href="https://www.youtube.com/c/abbaz" target='_blank'>
              <YouTubeIcon className={styles.youtube} />
            </Link>
            <Link href="https://twitter.com/abb_bank" target='_blank'>
              <TwitterIcon className={styles.twitter} />
            </Link>
            <Link href="https://www.linkedin.com/company/the-bank-abb/" target='_blank'>
              <LinkedInIcon className={styles.linkedin} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
