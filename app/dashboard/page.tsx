import Link from "next/link";

export default function Dashboard() {
  return (
    <main>
      <h1>Yehia's Dashboard</h1>

      <p>Welcome to Yehia's career dashboard.</p>

      <h2>Application Summary</h2>

      <ul>
        <li>
          <strong>2</strong> Submitted Applications
        </li>
        <li>
          <strong>1</strong> Saved Opportunity
        </li>
        <li>
          <strong>1</strong> Interview
        </li>
      </ul>

      <h2>Quick Links</h2>

      <ul>
        <li>
          <Link href="/opportunities">View Opportunities</Link>
        </li>

        <li>
          <Link href="/dashboard/applications">
            View Applications
          </Link>
        </li>

        <li>
          <Link href="/plan">View Career Plan</Link>
        </li>
      </ul>
    </main>
  );
}