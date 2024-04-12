import { AdminSideBar } from "@/components/Sidebar";

export default function AdminLayoutPage({ children }) {
  return (
    <div>
      <AdminSideBar />
      {children}
    </div>
  );
}
