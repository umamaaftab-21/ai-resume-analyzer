export interface TechnicalSkillCategory {
  category: string;
  skills: string[];
  matchLevel: 'High' | 'Medium' | 'Low';
  comment: string;
}

export interface SkillGapCategory {
  categoryName: string;
  candidateSkills: string[];
  requiredSkills: string[];
  missingSkills: string[];
}

export interface ProjectRecommendation {
  title: string;
  skillsDeveloped: string[];
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  whyItImprovesPortfolio: string;
}

export interface InterviewQuestion {
  question: string;
  guidance: string;
}

export interface ResumeAnalysisResult {
  matchScore: number;
  scoreExplanation: string;
  matchingSkills: string[];
  missingSkills: string[];
  relevantProjects: string[];
  educationRelevance: {
    score: number;
    notes: string;
  };
  technicalSkillsAnalysis: TechnicalSkillCategory[];
  experienceAnalysis: string;
  resumeStrengths: string[];
  areasForImprovement: string[];
  atsOptimizationSuggestions: string[];
  skillGapCategories: SkillGapCategory[];
  projectRecommendations: ProjectRecommendation[];
  interviewPrep: {
    technicalQuestions: InterviewQuestion[];
    behavioralQuestions: InterviewQuestion[];
  };
  resumeImprovements: {
    professionalSummary: string;
    skillsSection: string;
    projectDescriptions: string;
    bulletPoints: string;
    keywords: string[];
    atsFormatting: string;
  };
}

export type ActiveTab = 'home' | 'match' | 'skills_gap' | 'projects' | 'interview' | 'improvements';
