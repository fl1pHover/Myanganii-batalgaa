import { AdminSideBar } from "@/components/Sidebar";

export default function AdminLayoutPage({ children }) {
  return (
    <div className="flex ">
      <div className="flex-1 border-e-2 border-gray-500">
        <AdminSideBar />
      </div>
      <div className="flex-[6_6_0%] mx-4">{children}</div>
    </div>
  );
}
