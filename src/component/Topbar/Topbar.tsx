import React from "react";
import styles from "@/component/Topbar/topbar.module.scss";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Topbar: React.FC = () => {
  return (
    <section className={styles.navbarSection}>
      <div className={styles.navbarRight}>
        <Image
          src="/image/KianBasparLogo.png"
          width={40}
          height={40}
          alt="logo"
          className={styles.logo}
        />
        <div>
          <p className={styles.title}>سیستم مدیریت سازمانی</p>
          <p className={styles.subtitle}>شرکت مهندسی کیان بسپار</p>
        </div>
      </div>

      <div className={styles.navbarLeft}>
        <Link href="/setting" className={styles.icon}>
          <IoSettingsOutline size={24} />
        </Link>
        <div className={styles.separator}>|</div>
        <Link href="/profile" className={styles.userSection}>
          <FaRegUser size={20} />
          <span>صالح رضایی</span>
          <span className={styles.icon}>
            <IoIosArrowDown size={16} />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Topbar;
