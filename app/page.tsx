import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link href="/" className="logo">
            Yehia's Career Path
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/plan">Plan</Link>
            <Link href="/opportunities">Opportunities</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <section className="hero">
            <span className="badge">Career Journey</span>

            <h1>Build Your Career Path</h1>

            <p>
              Yehia is a Computer Science graduate ready to begin
              his professional journey.
            </p>

            <p>
              His goal is to find a suitable job within two months.
              This website helps him stay organized, plan his next
              steps, and explore career opportunities.
            </p>

            <div className="buttons">
              <Link href="/plan" className="button">
                View My Plan
              </Link>

              <Link href="/opportunities" className="button secondary">
                Explore Opportunities
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}