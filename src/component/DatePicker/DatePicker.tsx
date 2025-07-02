import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styles from "@/component/DatePicker/DatePicker.module.scss";

type Props = {
  value: DateObject | null;
  onChange: (date: DateObject | null) => void;
};

export default function DatePickerComponent({ value, onChange }: Props) {
  return (
    <DatePicker
      numberOfMonths={1}
      onChange={onChange}
      value={value}
      locale={persian_fa}
      calendar={persian}
      placeholder="انتخاب تاریخ"
      containerClassName={styles.datePickerContainer}
      inputClass={styles.datePickerInput}
    />
  );
}
