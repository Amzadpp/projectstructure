"use client";
import Link from "next/link";

export default function DashboardSidebar() {
  return (
    <aside
      style={{ width: 220, background: "rgb(15, 118, 110)", color: "white", padding: 20 }}
    >
      <h3>
        <Link href="/" className="max-sm:hidden">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36"
          />
        </Link>
      </h3>
      <ul style={{ marginTop: 20 }}>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard/reports">Reports</Link>
        </li>
      </ul>
    </aside>
  );
}
