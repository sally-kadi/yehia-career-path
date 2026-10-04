import Link from "next/link";

const opportunities = [
  {
    id: "1",
    title: "Junior Front-End Developer",
    company: "Cedar Digital",
    location: "Beirut",
    description:
      "Build responsive interfaces and collaborate with a small development team.",
  },
  {
    id: "2",
    title: "Graduate Software Engineer",
    company: "Code Harbor",
    location: "Remote",
    description:
      "Support web projects, review code with teammates, and learn through practical tasks.",
  },
  {
    id: "3",
    title: "Web Development Intern",
    company: "Pixel Workshop",
    location: "Tripoli",
    description:
      "Help maintain website pages and practice HTML, CSS, JavaScript, and React.",
  },
];

export default async function OpportunityPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const opportunity = opportunities.find((item) => item.id === id);

  if (!opportunity) {
    return (
      <main>
        <h1>Opportunity not found</h1>
        <p>Sorry, this opportunity does not exist.</p>

        <Link href="/opportunities">
          Back to Opportunities
        </Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{opportunity.title}</h1>

      <p>
        <strong>Company:</strong> {opportunity.company}
      </p>

      <p>
        <strong>Location:</strong> {opportunity.location}
      </p>

      <p>{opportunity.description}</p>

      <br />

      <Link href="/opportunities">
        ← Back to Opportunities
      </Link>
    </main>
  );
}