"use client";
import DashboardHeader from "../components/headers/DashboardHeader";
import DashboardSidebar from "../components/sidebar/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <DashboardSidebar />

      <div style={{ flex: 1 }}>
        <DashboardHeader />
        <main style={{ padding: 20 }}>{children}</main>
      </div>
    </div>
  );
}
