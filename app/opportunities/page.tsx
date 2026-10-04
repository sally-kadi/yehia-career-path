import { opportunities } from "../data/opportunities";

export default function Opportunities() {
  return (
    <main>
      <h1>Career Opportunities</h1>

      <p>Explore suitable job opportunities for Yehia.</p>

      {opportunities.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>

          <p>
            <strong>Company:</strong> {job.company}
          </p>

          <p>
            <strong>Location:</strong> {job.location}
          </p>

          <p>{job.description}</p>
        </div>
      ))}
    </main>
  );
}