import Topbar from "@/component/Topbar/Topbar";
import Sidebar from "@/component/Sidebar/Sidebar";
import WarehouseTable from "@/component/Warehouse/warehouseTable/WarehouseTable";

export default function WarehousePage() {
  return (
    <main className="page">
      <h1 className="page-title">جزئیات رسید انبار</h1>

      <div className="topbar">
        <Topbar />
      </div>

      <div className="main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <WarehouseTable />
        </div>
      </div>
    </main>
  );
}
