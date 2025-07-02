import styles from "@/styles/404.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.section}>
      <div className={styles.contents}>
        <p className={styles.number}>404</p>
      </div>
      <div className={styles.texts}>
        <p>صفحه مورد نظر یافت نشد :((</p>
        <Link href="/">برگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
};

export default page;
