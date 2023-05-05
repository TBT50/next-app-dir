"use client";

import Link from "next/link";

function DashboardPage() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>DASHBOARD</h1>
      <Link href="/dashboard/settings">Settings</Link>
    </main>
  );
}

export default DashboardPage;
