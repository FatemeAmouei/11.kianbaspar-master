import { WarehouseItemType } from "./types";
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    name: "مواد اولیه",
    requestNum: 1,
    requestDate: " 12:08:00 | 1401/06/02",
    sendTo: "فروش مجازی",
    items: [
      {
        number: 1,
        name: "کارت های کنترل فرایند",
        approvedCount: 20,
        receivedCount: 10,
        description: "این متن توضیحات درخواست انبار است",
        status: "تایید شده",
      },
      {
        number: 2,
        name: "کارت های کنترل فرایند",
        approvedCount: 21,
        receivedCount: 15,
        description: "این متن توضیحات درخواست انبار است",
        status: "تایید نشده",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "تجهیزات کامپیوتری",
    requestNum: 6,
    requestDate: " 12:08:00 | 1401/12/25",
    sendTo: "دفتر مدیریت ",

    items: [
      {
        number: 1,
        name: "تجهیزات کامپیوتری",
        approvedCount: 18,
        receivedCount: 12,
        description: "این متن توضیحات درخواست انبار است",
        status: "تایید نشده",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "مواد اولیه",
    requestNum: 7,
    requestDate: " 12:08:00 | 1401/12/08",
    sendTo: "فروش مجازی",

    items: [
      {
        number: 1,
        name: "مواد اولیه",
        approvedCount: 24,
        receivedCount: 0,
        description: "این متن توضیحات درخواست انبار است",
        status: "تایید نشده",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "مواد اولیه",
    requestNum: 2,
    requestDate: " 12:08:00 | 1401/10/19",
    sendTo: "فروش نمایندگی",

    items: [
      {
        number: 1,
        name: "مواد اولیه",
        approvedCount: 1,
        receivedCount: 5,
        description: "این متن توضیحات درخواست انبار است",
        status: "تایید نشده",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "تجهیزات کامپیوتری",
    requestNum: 1,
    requestDate: " 12:08:00 | 1401/10/19",
    sendTo: "فروش مجازی",

    items: [
      {
        number: 1,
        name: "تجهیزات کامپیوتری",
        approvedCount: 10,
        receivedCount: 7,
        description: "این متن توضیحات درخواست انبار است",
        status: "تایید نشده",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "مواد اولیه",
    requestNum: 11,
    requestDate: " 12:08:00 | 1401/06/02",
    sendTo: "فروش مجازی",
    items: [
      {
        number: 1,
        name: "مواد اولیه",
        approvedCount: 6,
        receivedCount: 16,
        description: "این متن توضیحات درخواست انبار است",
        status: "تایید شده",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "مواد اولیه",
    requestNum: 1,
    requestDate: " 12:08:00 | 1401/12/19",
    sendTo: "فروش مجازی",

    items: [
      {
        number: 1,
        name: "مواد اولیه",
        approvedCount: 21,
        receivedCount: 0,
        description: "این متن توضیحات درخواست انبار است",
        status: "تایید نشده",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "مواد اولیه",
    requestNum: 11,
    requestDate: " 12:08:00 | 1401/06/02",
    sendTo: "فروش مجازی",
    items: [
      {
        number: 1,
        name: "مواد اولیه",
        approvedCount: 4,
        receivedCount: 15,
        description: "این متن توضیحات درخواست انبار است",
        status: "تایید نشده",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "تجهیزات کامپیوتری",
    requestNum: 1,
    requestDate: " 12:08:00 | 1401/06/02",
    sendTo: "فروش مجازی",
    items: [
      {
        number: 1,
        name: "تجهیزات کامپیوتری",
        approvedCount: 18,
        receivedCount: 4,
        description: "این متن توضیحات درخواست انبار است",
        status: "تایید نشده",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "مواد اولیه",
    requestNum: 6,
    requestDate: " 12:08:00 | 1401/06/02",
    sendTo: "فروش مجازی",
    items: [
      {
        number: 1,
        name: "کارت های کنترل فرایند",
        approvedCount: 12,
        receivedCount: 45,
        description: "این متن توضیحات درخواست انبار است",
        status: "تایید نشده",
      },
    ],
  },
];

export const WarehouseItem: WarehouseItemType[] = data.map((item) => ({
  id: uuidv4(),
  name: item.name,
  requestNum: item.requestNum,
  requestDate: item.requestDate,
  sendTo: item.sendTo,
  items: item.items.map((sub) => ({
    id: uuidv4(),
    name: sub.name,
    number: sub.number,
    approvedCount: sub.approvedCount,
    receivedCount: sub.receivedCount,
    description: sub.description,
    status: sub.status,
  })),
}));
