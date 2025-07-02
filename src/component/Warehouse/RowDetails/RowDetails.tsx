import { RowProps } from "@/component/Warehouse/types";
import styles from "@/component/Warehouse/RowDetails/RowDetails.module.scss";
import { TfiMenuAlt } from "react-icons/tfi";

export default function RowDetails({
  className,
  items,
  colspan,
  operationOpenMenu,
  requestNum,
  itemCount,
}: RowProps) {
  return (
    <tr>
      <td colSpan={colspan}>
        <div className={styles.tableTh}>
          <div className={styles.tableThRight}>
            <TfiMenuAlt />
            <p>جزئیات حواله انبار شماره</p>
            <p>{requestNum}</p>
          </div>
          <div className={styles.tableThLeft}>
            <p>تعداد رکورد ها:</p>
            <p> {itemCount} </p>
          </div>
        </div>
        <table
          className={`${styles.innerTable} ${className ?? ""} ${
            operationOpenMenu ? styles.activeRow : ""
          }`}
        >
          <thead>
            <tr>
              <th>ردیف </th>
              <th>نام کالا</th>
              <th>تعداد حواله شده</th>
              <th>تعداد تایید شده</th>
              <th>توضیحات</th>
              <th>تایید شده</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {items.map((items) => (
              <tr key={items.id}>
                <td>{items.number}</td>
                <td>{items.name}</td>
                <td>{items.receivedCount}</td>
                <td>{items.approvedCount}</td>
                <td>{items.description}</td>
                <td>{items.status}</td>
                <td>
                  <button
                    className={styles.editBtn}
                    onClick={() => alert("ویرایش جزئیات")}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </td>
    </tr>
  );
}
