
import {
  applications,
  savedOpportunities,
} from "../../data/applications";

export default function ApplicationsPage() {
  return (
    <main>
      <h1>My Applications</h1>

      <p>
        Track Yehia&apos;s job applications and their
        current status.
      </p>

      <div className="card-grid">
        {applications.map((application) => (
          <div className="card" key={application.id}>
            <span className="badge">
              {application.status}
            </span>

            <h2>{application.title}</h2>
            <p>{application.company}</p>
            <p>{application.description}</p>
          </div>
        ))}
      </div>

      <h2>Saved Opportunities</h2>

      <div className="card-grid">
        {savedOpportunities.map((opportunity) => (
          <div className="card" key={opportunity.id}>
            <span className="badge">Saved</span>

            <h2>{opportunity.title}</h2>
            <p>{opportunity.company}</p>
            <p>{opportunity.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
