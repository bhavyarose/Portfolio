export interface ProjectDNA {
  problem: string;
  idea: string;
  build: string[];
  result: string;
  learning: string;
  nextIteration: string;
}

export interface ProjectNode {
  id: string;
  name: string;
  repoName: string;
  category: 'AI' | 'DATA' | 'PYTHON' | 'ALGORITHMS' | 'WEB' | 'EXPERIMENTS';
  description: string;
  languages: string[];
  status: 'ACTIVE' | 'DEPLOYED' | 'PROTOTYPE' | 'RESEARCH';
  githubUrl: string;
  stars?: number;
  forks?: number;
  updatedAt?: string;
  x: number; // canvas placement %
  y: number; // canvas placement %
  dna: ProjectDNA;
}

export interface DeepDiveStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  codeSnippet?: string;
  metrics?: { label: string; value: string }[];
}

export interface ThinkingStage {
  id: string;
  num: string;
  title: string;
  summary: string;
  details: string;
  iconName: string;
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'CORE' | 'LANGUAGES' | 'DATA_AI' | 'TOOLS';
  description: string;
  relatedProjects: string[];
  isCentral?: boolean;
}

export interface LearningItem {
  id: string;
  tag: 'LEARNING' | 'EXPERIMENTING' | 'BUILDING' | 'NEXT';
  topic: string;
  description: string;
  focusArea: string;
}

export interface BeyondPanel {
  id: 'LEARN' | 'BUILD' | 'EXPLORE' | 'COLLABORATE';
  title: string;
  subtitle: string;
  items: string[];
  quote: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  isCurrent?: boolean;
}

export interface GithubRepoInfo {
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}
