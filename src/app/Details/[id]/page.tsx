"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import style from "./details.module.scss";
import Toolbar from "@/component/Topbar/Topbar";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import RowDetails from "@/component/Warehouse/RowDetails/RowDetails";
import { WarehouseItem } from "@/component/Warehouse/warehouse.data";

export default function DetailsPage() {
  const params = useParams();
  const requestId = params.id;

  const requestData = WarehouseItem.find(
    (item) => String(item.requestNum) === String(requestId)
  );
  if (!requestData) return <p>درخواستی با این شماره پیدا نشد.</p>;

  const [formData, setFormData] = useState({
    name: "",
    count: "",
    desc: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("فرم ارسال شد:", {
      ...formData,
    });

    alert("با موفقیت ارسال شد!");
  };

  return (
    <div className={style.container}>
      <Toolbar />

      <div className={style.breadCrumb}>
        <nav aria-label="breadcrumb" style={{ marginBottom: "1rem" }}>
          <ol className={style.breadCrumbOl}>
            <Link href="/" className={style.breadcrumbLink}>
              خانه
            </Link>
            <IoIosArrowBack />
            <Link href="/" className={style.breadcrumbLink}>
              لیست درخواست های انبار
            </Link>
            <IoIosArrowBack />
            <Link
              href={`/Details/${requestId}`}
              className={style.breadcrumbLink}
            >
              افزودن جزئیات درخواست انبار
            </Link>
          </ol>
        </nav>{" "}
      </div>

      <div className={style.centerWrapper}>
        <div className={style.detailContent}>
          <h2 className={style.title}>ثبت جزئیات درخواست کالا از انبار</h2>

          <form className={style.formSection} onSubmit={handleSubmit}>
            <div className={style.inputRows}>
              <div className={style.inputDiv}>
                <span className={style.inputTitle}>نام کالا</span>
                <select
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={style.formInput}
                >
                  <option value="" disabled>
                    انتخاب کنید ...
                  </option>
                  <option value="number">کارت فوتبالی </option>
                  <option value="package">اسطوره تویی </option>
                </select>
              </div>

              <div className={style.inputDiv}>
                <span className={style.inputTitle}> تعداد حواله</span>
                <input
                  className={style.codeinput}
                  type="number"
                  name="count"
                  placeholder=""
                  value={formData.count}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={style.inputRow2}>
              <div className={style.inputDiv}>
                <span className={style.inputTitle}> توضیحات </span>
                <input
                  className={style.formInput}
                  type="text"
                  name="desc"
                  placeholder=""
                  value={formData.desc}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" className={style.submitBtn}>
              ثبت اطلاعات
            </button>
          </form>

          <div className={style.RowDetailsdiv}>
            <RowDetails
              className={style.RowDetails}
              items={requestData.items}
              colspan={5}
              operationOpenMenu={requestData.id}
              requestNum={requestData.requestNum}
              itemCount={requestData.items.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
