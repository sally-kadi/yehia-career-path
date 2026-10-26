
import Link from "next/link";
import {
  applications,
  savedOpportunities,
} from "../data/applications";

export default function Dashboard() {
  const submittedCount = applications.length;

  const savedCount = savedOpportunities.length;

  const interviewCount = applications.filter(
    (application) => application.status === "Interview"
  ).length;

  return (
    <main>
      <h1>Yehia&apos;s Dashboard</h1>

      <p>Welcome to Yehia&apos;s career dashboard.</p>

      <p>
        Keep going, Yehia! Every application brings you
        one step closer to your career goals.
      </p>

      <h2>Application Summary</h2>

      <ul>
        <li>
          <strong>{submittedCount}</strong> Submitted Applications
        </li>

        <li>
          <strong>{savedCount}</strong> Saved Opportunities
        </li>

        <li>
          <strong>{interviewCount}</strong> Interview
        </li>
      </ul>

      <h2>Quick Links</h2>

      <ul>
        <li>
          <Link href="/opportunities">
            View Opportunities
          </Link>
        </li>

        <li>
          <Link href="/dashboard/applications">
            View Applications
          </Link>
        </li>

        <li>
          <Link href="/plan">
            View Career Plan
          </Link>
        </li>
      </ul>
    </main>
  );
}
