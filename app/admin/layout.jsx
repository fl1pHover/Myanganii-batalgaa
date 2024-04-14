import { AdminSideBar } from "@/components/Sidebar";

export default function AdminLayoutPage({ children }) {
  return (
    <div className="flex py-[150px]">
      <div className="flex-1 border-gray-500 border-e-2">
        <AdminSideBar />
      </div>
      <div className="flex-[6_6_0%] mx-4">{children}</div>
    </div>
  );
}
