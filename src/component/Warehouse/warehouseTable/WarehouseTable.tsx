"use client";

import { useState, Fragment, useEffect } from "react";
import styles from "@/component/Warehouse/warehouseTable/WarehouseTable.module.scss";
import { WarehouseItem } from "@/component/Warehouse/warehouse.data";
import RowDetails from "@/component/Warehouse/RowDetails/RowDetails";
import Pagination from "@/component/pagination/Pagination";
import { CiSearch } from "react-icons/ci";
import { LiaSortAmountDownSolid } from "react-icons/lia";
import { IoFilter } from "react-icons/io5";
import { MdOutlineWarehouse } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { WarehouseItemType } from "../types";
import { DateObject } from "react-multi-date-picker";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { TfiMenuAlt } from "react-icons/tfi";

export default function WarehouseTable() {
  const [search, setSearch] = useState("");
  const [warehouseFilter, setWarehouseFilter] = useState("همه");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [shownItems, setShownItems] = useState<WarehouseItemType[]>(
    WarehouseItem.slice(0, 5)
  );
  const [date, setDate] = useState<DateObject | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const [operationOpenMenu, setOperationOpenMenu] = useState<string | null>(
    null
  );
  const router = useRouter();

  const handleToggleMenu = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  const toggleRow = (id: string): void => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const DatePickerComponent = dynamic(
    () => import("@/component/DatePicker/DatePicker"),
    { ssr: false }
  );

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.header}>
        <MdOutlineWarehouse />
        <p>رسید انبار</p>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.toolbarright}>
          <div className={styles.inputSearch}>
            <button>
              <CiSearch />
            </button>
            <input
              type="text"
              placeholder="جستجو بر اساس شماره رسید انبار ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            value={warehouseFilter}
            onChange={(e) => setWarehouseFilter(e.target.value)}
            className={styles.option}
          >
            <option value="همه">همه انبارها</option>
            <option value="انبار">انبار</option>
          </select>
          <div className={styles.inputWithIcon}>
            <DatePickerComponent value={date} onChange={setDate} />
          </div>
          <button className={styles.searchBtn}>
            <CiSearch />
          </button>
        </div>
        <div className={styles.toolbarleft}>
          <button className={styles.deletebutton}>پاک کردن</button>
          <button
            className={styles.filterbutton}
            onClick={() => setIsFilterOpen(true)}
          >
            <button>
              <IoFilter />
            </button>
            فیلترها
          </button>
          <button className={styles.sortbutton}>
            <LiaSortAmountDownSolid />
          </button>
        </div>
      </div>

      {isFilterOpen && (
        <div className={styles.filterSidebar}>
          <div className={styles.filterHeader}>
            <button
              className={styles.closeButton}
              onClick={() => setIsFilterOpen(false)}
            >
              × فیلترها
            </button>
            <button
              className={styles.deleteFilter}
              onClick={() => setIsFilterOpen(false)}
            >
              حذف فیلتر
            </button>
          </div>

          <div>
            <ul className={styles.filterList} onClick={handleToggleMenu}>
              دسته بندی
              {isCategoryOpen ? (
                <IoIosArrowDown size={8} />
              ) : (
                <IoIosArrowBack size={8} />
              )}
            </ul>
          </div>
          {isCategoryOpen && (
            <div
              className={`${styles.dropdown} ${
                isCategoryOpen ? styles.show : ""
              }`}
            >
              <ul className={styles.dropdownList}>
                <li className={styles.dropdownItem}>مواد اولیه</li>
                <li className={styles.dropdownItem}>محصول</li>
                <li className={styles.dropdownItem}>ملزومات</li>
                <li className={styles.dropdownItem}>کیمدی</li>
                <li className={styles.dropdownItem}>نیمه ساخته</li>
                <li className={styles.dropdownItem}>اداری</li>
                <li className={styles.dropdownItem}>تجهیزات کامپیوتری</li>
                <li className={styles.dropdownItem}>مواد اولیه چاپی</li>
                <li className={styles.dropdownItem}>فوتبال</li>
                <li className={styles.dropdownItem}>کارتهای فوتبالی</li>
                <li className={styles.dropdownItem}>کارت های سری 2025</li>
              </ul>
            </div>
          )}
        </div>
      )}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>شماره درخواست</th>
            <th>تاریخ درخواست</th>
            <th>نام انبار</th>
            <th>ارسال به</th>
            <th>عملیات</th>
          </tr>
        </thead>

        <tbody>
          {shownItems.map((row) => (
            <Fragment key={row.id}>
              <tr className={expanded === row.id ? styles.selected : ""}>
                <td className={styles.requestNumdiv}>
                  {expanded === row.id ? (
                    <IoIosArrowDown className={styles.requestNumIcon} />
                  ) : (
                    <IoIosArrowBack className={styles.requestNumIcon} />
                  )}
                  {row.requestNum}
                </td>
                <td>{row.requestDate}</td>
                <td>{row.name}</td> <td>{row.sendTo}</td>
                <td style={{ position: "relative" }}>
                  <div
                    onClick={() =>
                      setOperationOpenMenu((prev) =>
                        prev === row.id ? null : row.id
                      )
                    }
                    className={`${styles.expanddiv} ${
                      operationOpenMenu === row.id ? styles.activeBtn : ""
                    }`}
                  >
                    <button
                      className={`${styles.expandBtn} ${
                        operationOpenMenu === row.id ? styles.activeBtn : ""
                      }`}
                    >
                      <TfiMenuAlt />
                    </button>
                    <span>عملیات انتخاب</span>
                  </div>

                  {operationOpenMenu === row.id && (
                    <div className={styles.dropdownMenu}>
                      <div
                        onClick={() =>
                          router.push(`/Details/${row.requestNum}`)
                        }
                        className={styles.dropdownBtn}
                      >
                        ثبت جزئیات درخواست انبار
                      </div>
                      <div
                        onClick={() => {
                          toggleRow(row.id);
                          setOperationOpenMenu(null);
                        }}
                        className={styles.dropdownBtn}
                      >
                        نمایش جزئیات درخواست انبار
                      </div>
                      <div
                        onClick={() => {
                          alert(`ویرایش:${row.id}`);
                          setOperationOpenMenu(null);
                        }}
                        className={styles.dropdownBtn}
                      >
                        ویرایش درخواست انبار
                      </div>
                    </div>
                  )}
                </td>
              </tr>

              {expanded === row.id && (
                <RowDetails
                  items={row.items}
                  colspan={5}
                  operationOpenMenu={row.id}
                  requestNum={row.requestNum}
                  itemCount={row.items.length}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>

      <Pagination
        items={WarehouseItem}
        itemsPerPage={itemsPerPage}
        setItemPerPage={setItemsPerPage}
        setShownItems={setShownItems}
      />
    </div>
  );
}
