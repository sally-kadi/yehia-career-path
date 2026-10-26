
export type Application = {
  id: number;
  title: string;
  company: string;
  status: "Applied" | "Interview";
  description: string;
};

export type SavedOpportunity = {
  id: number;
  title: string;
  company: string;
  description: string;
};

export const applications: Application[] = [
  {
    id: 1,
    title: "Junior Front-End Developer",
    company: "Cedar Digital",
    status: "Applied",
    description: "Application submitted successfully.",
  },
  {
    id: 2,
    title: "Graduate Software Engineer",
    company: "Code Harbor",
    status: "Interview",
    description: "Technical interview is scheduled.",
  },
];

export const savedOpportunities: SavedOpportunity[] = [
  {
    id: 3,
    title: "Web Development Intern",
    company: "Pixel Workshop",
    description: "Opportunity saved for later application.",
  },
];
