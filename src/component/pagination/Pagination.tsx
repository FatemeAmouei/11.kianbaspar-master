"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "./pagination.module.scss";

type PageParam = { page?: string };

interface PaginationProps<T> {
  items: T[];
  itemsPerPage: number;
  setItemPerPage: (count: number) => void;
  setShownItems: (items: T[]) => void;
}

export default function Pagination<T>({
  items,
  itemsPerPage,
  setItemPerPage,
  setShownItems,
}: PaginationProps<T>) {
  const router = useRouter();
  const params = useParams<PageParam>();
  const paramPage = Number(params.page ?? "1");
  const [currentPage, setCurrentPage] = useState(paramPage);

  const pagesCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(paramPage);
  }, [paramPage]);

  useEffect(() => {
    if (items.length === 0) {
      setShownItems([]);
      return;
    }
    const safePage =
      currentPage > pagesCount ? pagesCount : currentPage < 1 ? 1 : currentPage;

    const start = (safePage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setShownItems(items.slice(start, end));

    if (safePage !== currentPage) {
      setCurrentPage(safePage);
    }
  }, [currentPage, items, itemsPerPage, pagesCount, setShownItems, router]);

  const goTo = (page: number) => {
    if (page >= 1 && page <= pagesCount) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.meta}>
        <div className={styles.count}>
          <p>تعداد نتایج:</p>
          <p className={styles.countP}>{items.length.toLocaleString()} مورد</p>
        </div>
        <div className={styles.count}>
          <p>تعداد نمایش:</p>
          <div className={styles.box}>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemPerPage(Number(e.target.value))}
            >
              {[5, 10, 15, 20].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button
        className={styles.navBtn}
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
      >
        «
      </button>

      {Array.from({ length: pagesCount }, (_, i) => (
        <button
          key={i + 1}
          className={`${styles.pageBtn} ${
            currentPage === i + 1 ? styles.active : ""
          }`}
          onClick={() => goTo(i + 1)}
          aria-current={currentPage === i + 1 ? "page" : undefined}
        >
          {i + 1}
        </button>
      ))}

      <button
        className={styles.navBtn}
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === pagesCount}
      >
        »
      </button>
    </div>
  );
}
