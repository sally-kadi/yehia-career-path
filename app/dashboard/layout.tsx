import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>
        <Link href="/dashboard">Overview</Link>
        {" | "}
        <Link href="/dashboard/applications">Applications</Link>
      </nav>

      {children}
    </section>
  );
}