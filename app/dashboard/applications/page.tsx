export default function ApplicationsPage() {
  return (
    <main>
      <h1>My Applications</h1>

      <p>Track Yehia's job applications and their current status.</p>

      <div className="card-grid">
        <div className="card">
          <span className="badge">Applied</span>
          <h2>Junior Front-End Developer</h2>
          <p>Cedar Digital</p>
          <p>Application submitted successfully.</p>
        </div>

        <div className="card">
          <span className="badge">Interview</span>
          <h2>Graduate Software Engineer</h2>
          <p>Code Harbor</p>
          <p>Technical interview is scheduled.</p>
        </div>

        <div className="card">
          <span className="badge">Saved</span>
          <h2>Web Development Intern</h2>
          <p>Pixel Workshop</p>
          <p>Opportunity saved for later application.</p>
        </div>
      </div>
    </main>
  );
}