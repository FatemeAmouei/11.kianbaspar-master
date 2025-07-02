export interface Item {
  id: string;
  number: number;
  name: string;
  approvedCount: number;
  receivedCount: number;
  description: string;
  status: string;
}

export interface WarehouseItemType {
  id: string;
  requestNum: number;
  name: string;
  requestDate: string;
  sendTo: string;
  items: Item[];
}

export interface RowProps {
  items: Item[];
  colspan: number;
  operationOpenMenu: string;
  requestNum: number;
  itemCount: number;
  className?: string;
}
