export type Project = {
    id: string;
    title: string;
    category: string;
    preview: string;
    position: { x: number; y: number };
    techStack: string[];
    emotionalChallenge: string;
    architecture: string;
    nextSteps: string;
    skills?: string[];
  };