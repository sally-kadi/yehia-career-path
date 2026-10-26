
import Link from "next/link";
import { opportunities } from "../../data/opportunities";

type OpportunityPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OpportunityPage({
  params,
}: OpportunityPageProps) {
  const { id } = await params;

  const opportunity = opportunities.find(
    (job) => String(job.id) === String(id)
  );

  if (!opportunity) {
    return (
      <main>
        <h1>Opportunity not found</h1>

        <p>
          Sorry, we couldn&apos;t find this opportunity.
        </p>

        <Link href="/opportunities">
          Back to opportunities
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

      <Link href="/opportunities">
        Back to opportunities
      </Link>
    </main>
  );
}
