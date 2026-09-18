import { ResumeAnalysisResult } from '../types';

export const SAMPLE_RESUME_TEXT = `ALEX CHEN
San Francisco, CA | (555) 019-2834 | alex.chen@university.edu | github.com/alexchen-ds | linkedin.com/in/alex-chen-ds

EDUCATION
B.S. in Computer Science & Data Science (Minor in Statistics)
University of California, Berkeley | GPA: 3.84 / 4.0
Expected Graduation: May 2027
Relevant Coursework: Data Structures & Algorithms, Machine Learning, Probability & Statistics, Database Management Systems, Linear Algebra.

TECHNICAL SKILLS
Languages: Python, SQL, R, JavaScript, C++
Data Science & ML: Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn, Jupyter
Databases & Tools: PostgreSQL, Git, GitHub, VS Code, Linux, Docker (Basic)

EXPERIENCE
Undergraduate Data Science Research Assistant
UC Berkeley Data Science Lab | Sep 2024 – Present
- Analyzed dataset of 500,000+ environmental records using Python (Pandas, NumPy) to track urban temperature anomalies.
- Built exploratory data analysis (EDA) visualizations with Seaborn and Matplotlib, presenting weekly insights to faculty researchers.
- Optimized SQL database queries, reducing data retrieval time for research metrics by 35%.

Software Engineering & Data Intern
TechVanguard Solutions | Jun 2024 – Aug 2024
- Developed automated data cleaning pipelines in Python, processing CSV and JSON logs from cloud services daily.
- Collaborated with senior engineers to build a Flask REST API endpoints returning user analytics metrics.
- Wrote unit tests using PyTest, achieving 85% code coverage across backend microservices.

PROJECTS
Predictive Student Performance Dashboard | Python, Scikit-Learn, Streamlit, Pandas
- Designed and trained a Random Forest Classifier to predict student course retention with 82% accuracy.
- Deployed an interactive Streamlit web dashboard allowing instructors to test feature inputs and view predictive metrics in real-time.

E-Commerce Customer Segmentation | Python, SQL, K-Means Clustering, Tableau
- Performed RFM (Recency, Frequency, Monetary) customer segmentation on 50k transaction records using PostgreSQL and Python.
- Built a Tableau dashboard highlighting high-value customer clusters and seasonal purchasing trends.
`;

export const SAMPLE_JOB_DESCRIPTION = `Data Science Intern - Summer 2027
Acme Analytics Corp | San Francisco, CA (Hybrid)

About the Role:
We are seeking a motivated Data Science Intern to join our core analytics and machine learning team for Summer 2027. You will work alongside experienced data scientists and engineers to build predictive models, analyze large-scale datasets, and help drive product decision-making.

Key Responsibilities:
- Design, train, and evaluate machine learning models (classification, regression, clustering) using Python and Scikit-Learn or PyTorch.
- Write clean, maintainable SQL queries to extract and aggregate data from our PostgreSQL and cloud data warehouses.
- Build exploratory data visualizations and automated reporting dashboards to communicate insights to cross-functional stakeholders.
- Collaborate on MLOps pipelines, model evaluation, and feature engineering tasks.

Qualifications & Requirements:
- Currently pursuing a B.S. or M.S. in Computer Science, Data Science, Statistics, Mathematics, or a related quantitative field.
- Strong proficiency in Python and SQL with hands-on experience in Pandas, NumPy, and Scikit-Learn.
- Familiarity with Machine Learning fundamentals and statistical analysis.
- Experience with visualization tools (Tableau, Matplotlib, or Seaborn).
- Familiarity with version control (Git/GitHub) and basic containerization (Docker) is a plus.
- Excellent problem-solving skills and passion for deriving insights from complex datasets.`;

export const DEMO_ANALYSIS_RESULT: ResumeAnalysisResult = {
  matchScore: 84,
  scoreExplanation: "Strong alignment with core requirements. The candidate has solid Python, SQL, Pandas, Scikit-Learn, and dashboard experience matching the Data Science Intern role. Minor gaps in PyTorch and AWS cloud tools can be addressed through targeted project work.",
  matchingSkills: ["Python", "SQL", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "PostgreSQL", "Git", "GitHub"],
  missingSkills: ["PyTorch", "Tableau", "AWS", "Docker", "MLOps"],
  relevantProjects: [
    "Predictive Student Performance Dashboard (Random Forest, Streamlit)",
    "E-Commerce Customer Segmentation (K-Means, PostgreSQL, Tableau)"
  ],
  educationRelevance: {
    score: 95,
    notes: "B.S. in Computer Science & Data Science with 3.84 GPA directly matches the preferred academic background."
  },
  technicalSkillsAnalysis: [
    {
      category: "Programming",
      skills: ["Python", "SQL", "R", "JavaScript", "C++"],
      matchLevel: "High",
      comment: "Excellent command of Python and SQL required for data extraction and modeling."
    },
    {
      category: "Data Science & ML",
      skills: ["Pandas", "NumPy", "Scikit-Learn"],
      matchLevel: "High",
      comment: "Strong practical use demonstrated in research and project work."
    },
    {
      category: "Deep Learning & AI",
      skills: [],
      matchLevel: "Low",
      comment: "PyTorch/TensorFlow are not mentioned in the resume; recommended to add deep learning coursework or projects."
    },
    {
      category: "Databases & Tools",
      skills: ["PostgreSQL", "Git", "GitHub"],
      matchLevel: "Medium",
      comment: "Good PostgreSQL and Git experience; AWS and Docker exposure is currently minimal."
    }
  ],
  experienceAnalysis: "Demonstrated practical experience as an Undergraduate Research Assistant and Software/Data Intern. Strong use of data pipelines, SQL query optimization, and EDA.",
  resumeStrengths: [
    "Strong academic credentials (3.84 GPA in Computer Science & Data Science)",
    "Quantified impact in internship and research roles (e.g., 'reduced query time by 35%')",
    "Relevant hands-on ML and data visualization projects with live tools"
  ],
  areasForImprovement: [
    "Lack of explicit PyTorch or deep learning framework mentions",
    "Cloud infrastructure (AWS/GCP) and containerization tools need more prominence",
    "Tableau is listed in project description but not explicitly featured in the skills section"
  ],
  atsOptimizationSuggestions: [
    "Add a dedicated 'Cloud & MLOps' sub-bullet under skills to catch ATS keywords like AWS and Docker.",
    "Ensure project titles explicitly state methodologies used for automated keyword parsers.",
    "Include standard header formatting without multi-column tables for seamless ATS parsing."
  ],
  skillGapCategories: [
    {
      categoryName: "Programming",
      candidateSkills: ["Python", "SQL", "R"],
      requiredSkills: ["Python", "SQL", "R", "Scala"],
      missingSkills: ["Scala"]
    },
    {
      categoryName: "Data Science",
      candidateSkills: ["Pandas", "NumPy", "Scikit-Learn"],
      requiredSkills: ["Pandas", "NumPy", "Scikit-Learn", "Hypothesis Testing"],
      missingSkills: ["Hypothesis Testing"]
    },
    {
      categoryName: "Machine Learning",
      candidateSkills: ["Random Forest", "K-Means"],
      requiredSkills: ["Classification", "Regression", "Clustering", "Cross-Validation"],
      missingSkills: ["Advanced Cross-Validation"]
    },
    {
      categoryName: "AI / Generative AI",
      candidateSkills: [],
      requiredSkills: ["LLMs", "LangChain", "Embeddings"],
      missingSkills: ["LLMs", "LangChain", "Embeddings"]
    },
    {
      categoryName: "Data Visualization",
      candidateSkills: ["Matplotlib", "Seaborn"],
      requiredSkills: ["Matplotlib", "Seaborn", "Tableau", "PowerBI"],
      missingSkills: ["Tableau", "PowerBI"]
    },
    {
      categoryName: "Databases",
      candidateSkills: ["PostgreSQL"],
      requiredSkills: ["PostgreSQL", "NoSQL", "Snowflake"],
      missingSkills: ["Snowflake", "NoSQL"]
    },
    {
      categoryName: "Tools & Platforms",
      candidateSkills: ["Git", "GitHub", "Docker"],
      requiredSkills: ["Git", "AWS", "Docker", "MLflow"],
      missingSkills: ["AWS", "MLflow"]
    }
  ],
  projectRecommendations: [
    {
      title: "AWS Serverless Data Pipeline & Analytics Dashboard",
      skillsDeveloped: ["AWS (S3, Lambda)", "Python", "Tableau", "SQL"],
      description: "Build an automated pipeline ingesting public API data into AWS S3, transforming it with Python Lambda, and visualizing metrics in Tableau.",
      difficulty: "Intermediate",
      whyItImprovesPortfolio: "Directly addresses the missing cloud (AWS) and business intelligence (Tableau) requirements mentioned in top-tier data science internship postings."
    },
    {
      title: "PyTorch Image Classification & Model Interpretability",
      skillsDeveloped: ["PyTorch", "Convolutional Neural Networks", "SHAP / Captum"],
      description: "Train a PyTorch CNN on an open-source dataset and use interpretability libraries to explain model predictions.",
      difficulty: "Advanced",
      whyItImprovesPortfolio: "Fills the deep learning gap and demonstrates familiarity with model evaluation and transparency."
    },
    {
      title: "MLflow Experiment Tracking for Predictive Maintenance",
      skillsDeveloped: ["MLflow", "Scikit-Learn", "Hyperparameter Tuning"],
      description: "Track model parameters, metrics, and artifacts across multiple machine learning experiments using MLflow.",
      difficulty: "Intermediate",
      whyItImprovesPortfolio: "Showcases MLOps and experiment tracking skills that separate standard student projects from professional data science portfolios."
    }
  ],
  interviewPrep: {
    technicalQuestions: [
      {
        question: "Explain the difference between L1 (Lasso) and L2 (Ridge) regularization and when you would use each.",
        guidance: "Mention that L1 adds absolute penalty and can drive coefficients to zero (good for feature selection), while L2 adds squared penalty and keeps all features with smaller weights (good when most features are useful)."
      },
      {
        question: "How do you handle missing or skewed data in a large dataset before feeding it into a machine learning model?",
        guidance: "Discuss imputation strategies (mean, median, KNN or domain-specific defaults), outlier detection (IQR or Z-score), and transformation techniques like log scaling for skewed distributions."
      },
      {
        question: "Write or explain a SQL query to find the second highest salary from an Employee table.",
        guidance: "Explain using subqueries with MAX() or using LIMIT / OFFSET, or window functions like DENSE_RANK()."
      },
      {
        question: "What is overfitting in machine learning and how do you prevent it?",
        guidance: "Define overfitting (learning noise instead of signal, high variance on test data). Mention cross-validation, regularization, dropout, pruning, and gathering more training data."
      },
      {
        question: "Explain precision, recall, and F1-score. When would you optimize for precision over recall?",
        guidance: "Precision = TP / (TP + FP); Recall = TP / (TP + FN). Optimize for precision when false positives are very costly (e.g., spam detection or financial fraud where blocking legitimate transactions is bad)."
      }
    ],
    behavioralQuestions: [
      {
        question: "Tell me about a time you worked with a dataset that was messy or incomplete. How did you handle it?",
        guidance: "Use the STAR method: Situation (describe the research lab or internship dataset), Task (cleaning 500k messy records), Action (wrote robust Python scripts to inspect nulls, validate schema, impute values), Result (saved hours of team analysis time)."
      },
      {
        question: "Describe a project where you had to learn a new tool or library quickly under a deadline.",
        guidance: "Highlight your methodical learning approach: reading official documentation, building a small prototype, and applying it successfully to the project."
      },
      {
        question: "How do you prioritize tasks when working on multiple academic projects and internships simultaneously?",
        guidance: "Mention time-blocking, Kanban boards (GitHub Projects/Trello), and communicating proactively with stakeholders on deliverables."
      },
      {
        question: "Give an example of how you communicated technical insights to a non-technical audience.",
        guidance: "Reference your experience presenting EDA charts in the UC Berkeley research lab and translating data metrics into actionable insights for faculty."
      },
      {
        question: "Why are you interested in this specific data science internship role at our company?",
        guidance: "Connect your specific technical stack (Python, SQL, ML models) and career interests to the company's domain and mission."
      }
    ]
  },
  resumeImprovements: {
    professionalSummary: "Motivated Computer Science & Data Science undergraduate (3.84 GPA) with hands-on experience in Python, SQL, and machine learning model development. Proven ability to optimize database queries and build predictive analytics dashboards.",
    skillsSection: "Organize cleanly into: Programming (Python, SQL, R), Data Science & ML (Pandas, NumPy, Scikit-Learn), Cloud & MLOps (Git, Docker, AWS basics), and Visualization (Matplotlib, Seaborn, Tableau).",
    projectDescriptions: "Lead with strong action verbs and metrics. Example: 'Engineered a Random Forest classifier in Python achieving 82% accuracy on student retention prediction, deployed via interactive Streamlit web dashboard.'",
    bulletPoints: "Ensure every bullet follows the Action Verb + Task + Impact/Metric formula.",
    keywords: ["Python", "SQL", "Scikit-Learn", "Pandas", "Machine Learning", "Data Visualization", "Predictive Modeling", "Tableau"],
    atsFormatting: "Use standard single-column layout, clear section headings (Education, Experience, Projects, Skills), and avoid tables, graphics, or non-standard fonts."
  }
};
