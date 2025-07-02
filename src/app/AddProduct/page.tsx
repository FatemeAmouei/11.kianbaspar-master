"use client";

import React, { useState } from "react";
import styles from "@/app/AddProduct/AddProduct.module.scss";

type TreeNode = {
  id: number;
  title: string;
  children?: TreeNode[];
};

const productTree: TreeNode[] = [
  {
    id: 1,
    title: "مواد  اولیه",
    children: [
      {
        id: 2,
        title: "مواد اولیه چاپی",
        children: [
          {
            id: 3,
            title: "فوتبال",
            children: [
              {
                id: 4,
                title: "کارتهای فوتبالی",
                children: [
                  {
                    id: 5,
                    title: "کارت های سری 2025",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "محصول",
    children: [
      {
        id: 7,
        title: "کیمدی",
      },
    ],
  },
  {
    id: 8,
    title: "ملزومات",
    children: [
      {
        id: 9,
        title: "اداری",
        children: [
          {
            id: 10,
            title: "تجهیزات کامپیوتری",
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "نیمه ساخته",
  },
];

const AddProductForm = () => {
  const [expandedNodes, setExpandedNodes] = useState<number[]>([]);
  const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    code: "",
    unit: "",
    category: "",
    orderType: "",
    waitingTime: "",
    orderQuantity: "",
    min: "",
    max: "",
    img: "" as File | string,
    features: [] as string[],
  });

  const toggleNode = (id: number) => {
    setExpandedNodes((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const renderTree = (nodes: TreeNode[]) => (
    <ul className={styles.tree}>
      {nodes.map((node) => (
        <li key={node.id}>
          {node.children && (
            <button
              type="button"
              aria-label={expandedNodes.includes(node.id) ? "یازکردن" : "بستن"}
              className={styles.toggle}
              onClick={() => toggleNode(node.id)}
            >
              {expandedNodes.includes(node.id) ? "−" : "+"}
            </button>
          )}
          <span
            className={`${styles.treeItem} ${
              selectedNodeId === node.id ? styles.selected : ""
            }`}
            onClick={() => setSelectedNodeId(node.id)}
          >
            {node.title}
          </span>
          {node.children &&
            expandedNodes.includes(node.id) &&
            renderTree(node.children)}
        </li>
      ))}
    </ul>
  );

  const checkboxArray: string[] = [
    "فعال/غیرفعال",
    "کالاهای خریدنی",
    "ملزومات خریدنی",
    "کالای فروشی",
    "اسطوره تویی",
    "موثر بر کیفیت",
    "برون سپاری",
    "اموال قابل رسید",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const newFeatures = checked
        ? [...formData.features, value]
        : formData.features.filter((f) => f !== value);
      setFormData({ ...formData, features: newFeatures });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("فرم ارسال شد:", {
      ...formData,
      categoryId: selectedNodeId,
    });

    alert("با موفقیت ارسال شد!");
  };

  return (
    <div className={styles.container}>
      {" "}
      <form className={styles.formSection} onSubmit={handleSubmit}>
        <div className={styles.header}>افزودن کالا</div>

        <div className={styles.checkboxGroup}>
          {checkboxArray.map((label, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name="features"
                value={label}
                checked={formData.features.includes(label)}
                onChange={handleChange}
              />
              {label}
            </label>
          ))}
        </div>

        <div className={styles.inputRows}>
          <div className={styles.inputDiv}>
            <span className={styles.inputTitle}>کد کالا</span>
            <div>
              <input
                className={styles.codeinput}
                type="text"
                name="code"
                placeholder=""
                value={formData.code}
                onChange={handleChange}
              />
              <input type="checkbox" name="finalCode" value="" />
              نهایی کردن کد
            </div>
          </div>

          <div className={styles.inputDiv}>
            <span className={styles.inputTitle}>نام کالا</span>
            <input
              className={styles.formInput}
              type="text"
              name="name"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputDiv}>
            <span className={styles.inputTitle}>واحد کالا</span>
            <select
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              className={styles.formInput}
            >
              <option value="" disabled>
                انتخاب کنید ...
              </option>
              <option value="number">عدد </option>
              <option value="package">بسته </option>
            </select>
          </div>

          <div className={styles.inputDiv}>
            {" "}
            <span className={styles.inputTitle}>گروه کالا</span>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={styles.formInput}
            >
              <option value="" disabled>
                انتخاب کنید ...
              </option>
              <option value="kimdi">کیمدی </option>
            </select>
          </div>
        </div>
        <div className={styles.inputRows}>
          <div className={styles.inputDiv}>
            <span className={styles.inputTitle}>مدت زمان انتظار</span>
            <input
              className={styles.formInput}
              type="number"
              name="waitingTime"
              placeholder="0"
              value={formData.waitingTime}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputDiv}>
            <span className={styles.inputTitle}>مقدار بهینه سفارش</span>
            <input
              className={styles.formInput}
              type="number"
              name="orderQuantity"
              placeholder="0"
              value={formData.orderQuantity}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputDiv}>
            <span className={styles.inputTitle}>حداقل موجودی</span>
            <input
              className={styles.formInput}
              type="number"
              name="min"
              placeholder="0"
              value={formData.min}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputDiv}>
            {" "}
            <span className={styles.inputTitle}>حداکثر موجودی </span>
            <input
              className={styles.formInput}
              type="number"
              name="max"
              placeholder="0"
              value={formData.max}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputDiv}>
            <span className={styles.inputTitle}> نوع درخواست خرید</span>
            <select
              name="orderType"
              value={formData.orderType}
              onChange={handleChange}
              className={styles.formInput}
            >
              <option value="" disabled>
                انتخاب کنید ...
              </option>
              <option value="num1">نوع اول </option>
            </select>
          </div>

          <div className={styles.inputDiv}>
            {" "}
            <span className={styles.inputTitle}>قیمت کالا</span>
            <input
              className={styles.formInput}
              type="number"
              name="price"
              placeholder=""
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputDiv}>
            {" "}
            <span className={styles.inputTitle}> تصویر</span>
            <input
              className={styles.formInput}
              type="file"
              name="img"
              accept="image/*"
              onChange={(e) =>
                setFormData({ ...formData, img: e.target.files?.[0] || "" })
              }
            />
          </div>
        </div>
        <button type="submit" className={styles.submitBtn}>
          ثبت اطلاعات
        </button>
      </form>
      <div className={styles.treeSection}>
        <h4 className={styles.treeSectionTitle}>ساختار کالا</h4>
        {renderTree(productTree)}
      </div>
    </div>
  );
};

export default AddProductForm;
