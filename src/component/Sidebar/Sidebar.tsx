"use client";

import styles from "./sidebar.module.scss";
import { LuWarehouse, LuLayoutDashboard } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";
import { MdLogout } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { TbDatabaseDollar } from "react-icons/tb";
import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FC } from "react";

type MenuItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  subItems?: { label: string; href: string }[];
  href?: string;
};

const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "داشبورد",
    icon: <LuLayoutDashboard />,
    subItems: [
      { label: "داشبورد 1", href: "/dashboard1" },
      { label: "داشبورد 2", href: "/dashboard2" },
      { label: "داشبورد 3", href: "/dashboard3" },
    ],
  },
  {
    id: "warehouse",
    label: "مدیریت انبار",
    icon: <LuWarehouse />,
    subItems: [
      { label: "انبار 1", href: "/warehouse1" },
      { label: "انبار 2", href: "/warehouse2" },
      { label: "انبار 3", href: "/warehouse3" },
    ],
  },
  {
    id: "shop",
    label: "خرید و تدارکات",
    icon: <FaBasketShopping />,
    href: "/p-user/shop",
  },
  {
    id: "sales",
    label: "فروش",
    icon: <TbDatabaseDollar />,
    href: "/p-user/sales",
  },
  {
    id: "user-management",
    label: "مدیریت کاربران",
    icon: <FaUsers />,
    href: "/p-user/user-management",
  },
  {
    id: "system-management",
    label: "مدیریت سیستم",
    icon: <GrSystem />,
    href: "/p-user/system-management",
  },
];

const Sidebar: FC = () => {
  const router = useRouter();

  const [isOpenMenuId, setIsOpenMenuId] = useState<string | null>(null);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const handleToggleMenu = (id: string) => {
    setIsOpenMenuId((prev) => (prev === id ? null : id));
    setActiveItemId(id);
  };

  const logoutHandler = (): void => {
    Swal.fire({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/login");
      }
    });
  };

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebar_main}>
        {menuItems.map((item) => (
          <li key={item.id} className={styles.menuWrapper}>
            {item.subItems ? (
              <>
                <div
                  onClick={() => handleToggleMenu(item.id)}
                  className={`${styles.menuItem} ${
                    activeItemId === item.id ? styles.menuItemActive : ""
                  }`}
                >
                  {item.icon}
                  {item.label}
                  {isOpenMenuId === item.id ? (
                    <IoIosArrowBack size={8} />
                  ) : (
                    <IoIosArrowDown size={8} />
                  )}
                </div>
                {isOpenMenuId === item.id && (
                  <div
                    className={`${styles.dropdown} ${
                      isOpenMenuId ? styles.show : ""
                    }`}
                  >
                    <ul className={styles.dropdownList}>
                      {item.subItems.map((subItem, index) => (
                        <li key={index}>
                          <Link
                            href={subItem.href}
                            className={`${styles.dropdownItem} ${
                              activeItemId === subItem.href
                                ? styles.menuItemActive
                                : ""
                            }`}
                            onClick={() => setActiveItemId(subItem.href)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link href={item.href || "#"} className={styles.menuItem}>
                {item.icon}
                {item.label}
                <IoIosArrowDown size={8} />
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div onClick={logoutHandler} className={styles.Footer}>
        <span className={styles.info}>kianbaspar | ERP 2025-2026</span>
        <div className={styles.logout}>
          {" "}
          <MdLogout />
          خروج
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
