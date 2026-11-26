export interface Project {
  id: string;
  title: string;
  displayTitle: string;
  subtitle: string;
  category: 'Machine Learning' | 'Data Analysis' | 'NLP';
  summary: string;
  tags: string[];
  features: string[];
  methodology: string[];
  metricsPlaceholder: string;
  githubUrl: string;
  demoUrl: string;
  datasetInfo: string;
  status: 'Completed' | 'In Progress';
  // Netflix-style visual metadata
  cardBadge: string;
  rating: string;
  matchScore: string;
  releaseYear: string;
  durationLabel: string;
  themeGradient: string;
  accentColor: string;
  backdropArt: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  status: string;
  institutionPlaceholder: string;
  yearPlaceholder: string;
  description: string;
  keySubjects: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  type: string;
  durationPlaceholder: string;
  locationPlaceholder: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  datePlaceholder: string;
  credentialIdPlaceholder: string;
  linkPlaceholder: string;
  status: 'Verified Internship' | 'Pending Addition';
  description: string;
}

export interface StoryChapterMeta {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
  heading: string;
}

export const PORTFOLIO_DATA = {
  brand: {
    name: 'SHIKHIL',
    subtitle: 'THE STORY SO FAR',
    tagline: 'Every project has a story. Every challenge creates a lesson.',
    producer: 'Shikhil Yadav',
  },

  story: {
    title: 'SHIKHIL',
    subtitle: 'THE STORY SO FAR',
    tagline: 'Every project has a story. Every challenge creates a lesson.',
    opening: {
      heading: 'SHIKHIL YADAV',
      subtitle: 'THE STORY SO FAR',
      supportingText:
        'MCA student exploring Artificial Intelligence, Machine Learning, Data Science and Software Development.',
      cta: 'START MY JOURNEY',
    },
    chapters: [
      { id: 'chapter-00', number: '00', title: 'THE OPENING', shortLabel: 'The Opening', heading: 'SHIKHIL YADAV' },
      { id: 'chapter-01', number: '01', title: 'THE BEGINNING', shortLabel: 'The Beginning', heading: 'It started in college.' },
      { id: 'chapter-02', number: '02', title: 'CURIOSITY & EXPLORATION', shortLabel: 'Curiosity & Exploration', heading: 'One interest led to another.' },
      { id: 'chapter-03', number: '03', title: 'THE CHALLENGE', shortLabel: 'The Challenge', heading: 'Getting a model to work is only the beginning.' },
      { id: 'chapter-04', number: '04', title: 'THE CREATIONS', shortLabel: 'The Creations', heading: 'Interactive Case Studies' },
      { id: 'chapter-05', number: '05', title: 'THE PRESENT', shortLabel: 'The Present', heading: 'Postgraduate Research & Experience' },
      { id: 'chapter-06', number: '06', title: 'THE NEXT CHAPTER', shortLabel: 'The Next Chapter', heading: 'The story is still being written.' },
    ] as StoryChapterMeta[],
    beginning: {
      chapterTag: 'CHAPTER 01 — THE BEGINNING',
      heading: 'It started in college.',
      narrative: [
        'Like many journeys in computing, it didn’t begin with complex neural networks or massive cloud pipelines. It started with simple logic, foundational syntax, and the undeniable thrill of compiling a program that worked.',
        'During my college years, early coursework in algorithms and data structures opened an important door. While software development offered the power to build functional tools, data science presented something even more compelling: the ability to ask questions of raw information and reveal patterns hidden beneath the surface.',
        'That curiosity grew into a dedicated academic path — leading directly to my pursuit of a Master of Computer Applications (MCA), focusing deeply on algorithmic rigor, statistical reasoning, and machine intelligence.'
      ],
      milestones: [
        {
          phase: 'PHASE 01',
          title: 'Foundations in Logic',
          description: 'Exploring core programming principles, data structures, and algorithmic problem-solving.',
        },
        {
          phase: 'PHASE 02',
          title: 'The Data Awakening',
          description: 'Discovering that raw datasets contain narratives, trends, and predictive power when handled with statistical integrity.',
        },
        {
          phase: 'PHASE 03',
          title: 'Advanced MCA Pursuit',
          description: 'Committing to postgraduate research and applied engineering in Artificial Intelligence and Machine Learning.',
        },
      ]
    },
    curiosity: {
      chapterTag: 'CHAPTER 02 — CURIOSITY & EXPLORATION',
      heading: 'One interest led to another.',
      narrative:
        'My curiosity about technology expanded into different areas. I began exploring Artificial Intelligence, Machine Learning, Data Science and Software Development, experimenting with different tools and approaches.',
      domains: [
        {
          id: 'ai',
          title: 'Artificial Intelligence',
          tag: 'CORE DISCIPLINE',
          summary: 'Studying intelligent reasoning systems, probabilistic decision trees, and foundational concepts behind cognitive automation.',
          skills: ['Heuristic Search', 'Decision Trees', 'Pattern Recognition', 'Expert Systems'],
          icon: 'BrainCircuit',
        },
        {
          id: 'ml',
          title: 'Machine Learning',
          tag: 'PREDICTIVE SYSTEMS',
          summary: 'Designing end-to-end learning workflows: supervised classification, multivariate regression, and structured validation methods.',
          skills: ['Scikit-learn', 'Supervised Learning', 'Feature Scaling', 'Cross-Validation'],
          icon: 'Cpu',
        },
        {
          id: 'ds',
          title: 'Data Science',
          tag: 'ANALYTICS & EDA',
          summary: 'Transforming unstructured and tabular data into actionable statistical conclusions, distribution plots, and regional heatmaps.',
          skills: ['Pandas & NumPy', 'EDA & Wrangling', 'Matplotlib & Seaborn', 'Statistical Testing'],
          icon: 'Database',
        },
        {
          id: 'dev',
          title: 'Software Development',
          tag: 'ENGINEERING & CODE',
          summary: 'Writing clean, maintainable, and responsive web applications with TypeScript, React, and modular architecture.',
          skills: ['Python', 'TypeScript & React', 'Tailwind CSS', 'Vite & Git'],
          icon: 'Code2',
        },
        {
          id: 'sec',
          title: 'Cybersecurity',
          tag: 'INTEGRITY & DEFENSE',
          summary: 'Understanding threat landscapes, defensive engineering, malicious communication patterns, and safe data handling practices.',
          skills: ['SMS Spam Defense', 'Input Sanitization', 'Data Privacy', 'Security Hygiene'],
          icon: 'ShieldCheck',
        },
      ],
    },
    challenge: {
      chapterTag: 'CHAPTER 03 — THE CHALLENGE',
      heading: 'Getting a model to work is only the beginning.',
      narrative:
        'Working with machine learning models taught me that producing a prediction is not the same as producing a reliable result. Understanding unexpected outputs, investigating model behaviour and evaluating results became important parts of my learning process.',
      pipelineSteps: [
        { label: 'DATA', desc: 'Ingestion, sanitization, & statistical inspection' },
        { label: 'MODEL', desc: 'Architecture choice, fitting, & parameter tuning' },
        { label: 'PREDICTION', desc: 'Inference generation & residual calculation' },
        { label: 'EVALUATION', desc: 'Metrics validation, error analysis, & boundary testing' },
      ],
      stages: [
        {
          number: '01',
          title: 'Build',
          subtitle: 'Pipeline & Data Preparation',
          description:
            'Carefully preparing datasets, separating train and test distributions, scaling numerical features, and encoding categorical variables before fitting any estimator.',
          focusAreas: ['Data Preprocessing', 'Train/Test Separation', 'Baseline Estimators', 'Feature Standardization'],
        },
        {
          number: '02',
          title: 'Investigate',
          subtitle: 'Probing Model Behavior',
          description:
            'Inspecting misclassifications, unexpected predictions, and residual skewness rather than simply relying on aggregate accuracy scores.',
          focusAreas: ['Confusion Matrix Inspection', 'Residual Plot Analysis', 'False Positive Audits', 'Edge-Case Debugging'],
        },
        {
          number: '03',
          title: 'Improve',
          subtitle: 'Refinement & Validation',
          description:
            'Iterating on feature representations, comparing alternative estimators (e.g. TF-IDF vs. transformer embeddings), and documenting honest evaluation benchmarks.',
          focusAreas: ['Hyperparameter Tuning', 'Architectural Comparison', 'Cross-Validation Logging', 'Reproducible Notebooks'],
        },
      ],
    },
  },

  profile: {
    name: 'Shikhil Yadav',
    headline: 'AI & Machine Learning Enthusiast',
    subheadline: 'MCA student exploring Artificial Intelligence, Machine Learning, Data Science and Software Development through practical projects.',
    educationBadge: 'MCA (Currently Pursuing)',
    interests: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Science',
      'Software Development',
    ],
    summary:
      'Passionate technologist currently pursuing a Master of Computer Applications (MCA) with a strong foundation in Artificial Intelligence, Machine Learning, and Data Science. Experienced through practical data science internships such as Oasis Infobyte, with a focus on translating raw datasets into actionable insights and robust predictive systems.',
    resumeStatus: 'Pending Upload',
    resumePlaceholderNote: 'Your resume PDF is pending upload. Place your resume file in the public directory and link it here.',
    socials: {
      githubPlaceholder: 'https://github.com/shikhilyadav',
      linkedinPlaceholder: 'https://linkedin.com/in/[Your-LinkedIn-Profile]',
      emailPlaceholder: 'shikhil.[placeholder]@example.com',
      locationPlaceholder: '[Your City, Country]',
    },
  },

  projects: [
    {
      id: 'iris-ai',
      title: 'IrisAI — Iris Flower Classification',
      displayTitle: 'IrisAI: Species Morphology',
      subtitle: 'Multi-Class Morphological Classification Pipeline',
      category: 'Machine Learning',
      summary:
        'A foundational machine learning classification project identifying Iris flower species (Setosa, Versicolor, and Virginica) based on sepal and petal dimension measurements.',
      tags: ['Python', 'Scikit-learn', 'Supervised Learning', 'EDA', 'Classification'],
      features: [
        'Exploratory data analysis investigating feature distributions and pairwise correlations.',
        'Feature scaling and train-test partition validation.',
        'Multi-class decision boundary evaluation across classical classifiers.',
        'Comprehensive confusion matrix and classification report generation.',
      ],
      methodology: [
        'Data cleaning and inspection of Fisher’s Iris dataset.',
        'Visual correlation heatmaps and pair-plot dimensional distributions.',
        'Algorithm experimentation (Logistic Regression, Decision Trees, k-NN).',
        'Cross-validation and performance metric logging.',
      ],
      metricsPlaceholder: '[Add Verified Accuracy / Test Accuracy Metric]',
      githubUrl: '[Add GitHub Repository Link]',
      demoUrl: '[Add Live Demo / Notebook Link]',
      datasetInfo: 'Iris Dataset (Fisher, 1936) — 150 instances, 4 numeric features, 3 target classes.',
      status: 'Completed',
      cardBadge: 'SUPERVISED CLASSIFICATION',
      rating: 'Scikit-learn',
      matchScore: 'Fisher Dataset',
      releaseYear: '2024',
      durationLabel: 'Classification Pipeline',
      themeGradient: 'from-emerald-950 via-teal-900 to-[#141414]',
      accentColor: '#10B981',
      backdropArt: 'iris',
    },
    {
      id: 'unemployment-analysis',
      title: 'Unemployment Analysis — Data Analysis and Visualization',
      displayTitle: 'Unemployment Analysis: Socioeconomic Trends',
      subtitle: 'Socioeconomic Trends & Regional Impact Exploration',
      category: 'Data Analysis',
      summary:
        'In-depth exploratory data analysis and visual storytelling exploring unemployment rate fluctuations across diverse states, regions, and seasonal timelines with special focus on economic disruptions.',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Statistical Analysis'],
      features: [
        'Time-series trend analysis capturing sudden shifts during economic crises.',
        'Regional and state-level comparative distributions with interactive heatmaps.',
        'Labor force participation rate correlation with overall unemployment metrics.',
        'Clean tabular aggregations and publication-ready statistical figures.',
      ],
      methodology: [
        'Missing value curation, date parsing, and column standardization.',
        'Descriptive statistics and variance measures across urban vs rural sectors.',
        'Choropleth/regional thematic breakdowns and moving averages.',
        'Formulation of data-backed insights on employment recovery trajectories.',
      ],
      metricsPlaceholder: '[Add Verified Dataset Period / Key Statistical Insight]',
      githubUrl: '[Add GitHub Repository Link]',
      demoUrl: '[Add Live Dashboard / Notebook Link]',
      datasetInfo: 'State-wise Employment Statistics Dataset (COVID-19 & Historical Period).',
      status: 'Completed',
      cardBadge: 'SOCIOECONOMIC ANALYSIS',
      rating: 'Pandas & Seaborn',
      matchScore: 'Regional EDA',
      releaseYear: '2024',
      durationLabel: 'Exploratory Study',
      themeGradient: 'from-amber-950 via-orange-950 to-[#141414]',
      accentColor: '#F59E0B',
      backdropArt: 'unemployment',
    },
    {
      id: 'auto-value-ai',
      title: 'AutoValue AI — Car Price Prediction',
      displayTitle: 'AutoValue AI: Valuation Engine',
      subtitle: 'Multivariate Regression Valuation Engine',
      category: 'Machine Learning',
      summary:
        'An end-to-end regression modeling workflow that calculates estimated market resale valuations for pre-owned automobiles using structural, temporal, and brand variables.',
      tags: ['Python', 'Scikit-learn', 'Regression', 'Feature Engineering', 'NumPy'],
      features: [
        'Feature engineering incorporating vehicle age, fuel type, transmission, and mileage.',
        'Categorical variable encoding and numerical outlier handling.',
        'Comparative evaluation of regression estimators (Linear, Ridge, Random Forest).',
        'Residual error analysis and feature importance ranking.',
      ],
      methodology: [
        'Data cleaning and skewness mitigation on target valuation variables.',
        'One-Hot encoding for categorical features and MinMax/Standard scaling.',
        'Hyperparameter experimentation to prevent overfitting.',
        'Metric evaluation using R² score, Mean Absolute Error (MAE), and RMSE.',
      ],
      metricsPlaceholder: '[Add Verified R² Score / RMSE Benchmark]',
      githubUrl: '[Add GitHub Repository Link]',
      demoUrl: '[Add Live Prediction App / Notebook Link]',
      datasetInfo: 'Automobile Resale Market Dataset including vehicle specifications and sale prices.',
      status: 'Completed',
      cardBadge: 'MULTIVARIATE REGRESSION',
      rating: 'Regression Pipeline',
      matchScore: 'Valuation Engine',
      releaseYear: '2024',
      durationLabel: 'Valuation Engine',
      themeGradient: 'from-cyan-950 via-blue-950 to-[#141414]',
      accentColor: '#06B6D4',
      backdropArt: 'autovalue',
    },
    {
      id: 'spam-shield-ai',
      title: 'SpamShield AI — SMS Spam Detection using traditional ML and BERT',
      displayTitle: 'SpamShield AI: NLP & Transformers',
      subtitle: 'Comparative NLP: Classical Machine Learning vs. BERT Embeddings',
      category: 'NLP',
      summary:
        'A comparative natural language processing pipeline designed to identify and filter malicious or unsolicited SMS text messages, contrasting traditional vectorization with transformer representations.',
      tags: ['Python', 'NLP', 'BERT', 'Scikit-learn', 'TF-IDF', 'Transformers'],
      features: [
        'Text preprocessing pipeline including tokenization, stop-word elimination, and normalization.',
        'TF-IDF n-gram vectorization paired with Naive Bayes / Support Vector Machines.',
        'Deep semantic classification leveraging pretrained BERT contextual embeddings.',
        'Precision vs. recall trade-off analysis tailored for minimizing false positives on legitimate SMS.',
      ],
      methodology: [
        'Text corpus cleaning, case folding, and regex pattern filtering.',
        'Vectorization benchmark: Bag-of-Words vs. TF-IDF vs. Transformer token embeddings.',
        'Evaluation on imbalanced SMS datasets using stratified splits.',
        'Comparison of inference latency vs. semantic detection capability.',
      ],
      metricsPlaceholder: '[Add Verified BERT F1-Score / Accuracy Benchmark]',
      githubUrl: '[Add GitHub Repository Link]',
      demoUrl: '[Add Live Demo / HuggingFace Link]',
      datasetInfo: 'SMS Spam Collection Dataset (labeled Ham vs. Spam text entries).',
      status: 'Completed',
      cardBadge: 'COMPARATIVE NLP',
      rating: 'BERT vs TF-IDF',
      matchScore: 'Text Classification',
      releaseYear: '2024',
      durationLabel: 'NLP Architecture',
      themeGradient: 'from-rose-950 via-red-950 to-[#141414]',
      accentColor: '#E50914',
      backdropArt: 'spamshield',
    },
  ] as Project[],

  // Carousels configuration as requested
  carouselRows: [
    {
      id: 'continue-exploring',
      title: 'CONTINUE EXPLORING',
      subtitle: 'All featured engineering projects',
      projectIds: ['iris-ai', 'unemployment-analysis', 'auto-value-ai', 'spam-shield-ai'],
    },
    {
      id: 'ai-ml',
      title: 'ARTIFICIAL INTELLIGENCE & MACHINE LEARNING',
      subtitle: 'Supervised classification and regression architectures',
      projectIds: ['iris-ai', 'auto-value-ai'],
    },
    {
      id: 'data-analytics',
      title: 'DATA & ANALYTICS',
      subtitle: 'Exploratory data analysis & macroeconomic visual storytelling',
      projectIds: ['unemployment-analysis'],
    },
    {
      id: 'nlp',
      title: 'NATURAL LANGUAGE PROCESSING',
      subtitle: 'Modern semantic transformers & vector space models',
      projectIds: ['spam-shield-ai'],
    },
  ],

  // Skills organized into compact horizontal rows as requested
  skillsRows: [
    {
      category: 'Programming Languages',
      skills: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'C / C++ Foundations'],
    },
    {
      category: 'AI & Machine Learning',
      skills: ['Supervised Learning', 'Classification & Regression', 'Feature Engineering', 'Model Evaluation', 'Transformers (BERT)', 'Deep Learning Foundations'],
    },
    {
      category: 'Data Science',
      skills: ['Exploratory Data Analysis (EDA)', 'Data Cleaning & Wrangling', 'Pandas & NumPy', 'Matplotlib & Seaborn', 'Statistical Testing'],
    },
    {
      category: 'Web Development',
      skills: ['React', 'Tailwind CSS', 'Vite & Node.js', 'RESTful API Integration', 'Responsive UI/UX'],
    },
    {
      category: 'Developer Tools',
      skills: ['Git & GitHub', 'Jupyter Notebooks', 'VS Code', 'Google Colab', 'Linux / Shell'],
    },
  ],

  // Backward compatibility alias
  skills: [
    {
      title: 'Programming Languages',
      description: 'Core languages and syntax foundations.',
      skills: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'C / C++ Foundations'],
    },
    {
      title: 'AI & Machine Learning',
      description: 'Supervised classification, regression, and transformer models.',
      skills: ['Supervised Learning', 'Classification & Regression', 'Feature Engineering', 'Model Evaluation', 'Transformers (BERT)', 'Deep Learning Foundations'],
    },
    {
      title: 'Data Science',
      description: 'Data wrangling and exploratory statistical visualizations.',
      skills: ['Exploratory Data Analysis (EDA)', 'Data Cleaning & Wrangling', 'Pandas & NumPy', 'Matplotlib & Seaborn', 'Statistical Testing'],
    },
    {
      title: 'Developer Tools',
      description: 'Development environments and version control tooling.',
      skills: ['Git & GitHub', 'Jupyter Notebooks', 'VS Code', 'Google Colab', 'Linux / Shell'],
    },
  ],

  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      status: 'Currently Pursuing',
      institutionPlaceholder: '[Add University / College Name]',
      yearPlaceholder: '[e.g., 2024 – 2026 / Present]',
      description:
        'Advanced postgraduate program focusing on computational theory, modern software systems, algorithm design, and applied machine learning architectures.',
      keySubjects: [
        'Advanced Database Management',
        'Design & Analysis of Algorithms',
        'Artificial Intelligence & Expert Systems',
        'Machine Learning Principles',
        'Software Engineering Methodologies',
      ],
    },
  ] as EducationItem[],

  experience: [
    {
      role: 'Data Science Intern',
      organization: 'Oasis Infobyte (OIBSIP)',
      type: 'Internship',
      durationPlaceholder: '[Add Duration, e.g., 1 Month / June 2024]',
      locationPlaceholder: 'Remote / Virtual',
      summary:
        'Completed data science internship tasks delivering end-to-end analytical models, automated preprocessing routines, and predictive algorithms on real-world datasets.',
      responsibilities: [
        'Executed end-to-end data pipelines from raw dataset ingestion to model evaluation.',
        'Engineered machine learning models including flower species classification and regression-based price valuation.',
        'Conducted exploratory data analysis uncovering socioeconomic indicators across unemployment datasets.',
        'Explored natural language processing architectures comparing classical algorithms and transformer models.',
        'Structured reproducible research notebooks with clean documentation and visualization outputs.',
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'BERT'],
    },
  ] as ExperienceItem[],

  certificates: [
    {
      title: 'Data Science Internship Certificate',
      issuer: 'Oasis Infobyte (OIBSIP)',
      datePlaceholder: '[Add Issue Date, e.g., July 2024]',
      credentialIdPlaceholder: '[Add Credential / Certificate ID]',
      linkPlaceholder: '[Add Certificate Verification URL / Document]',
      status: 'Verified Internship',
      description:
        'Awarded upon successful completion of core data science and machine learning assignments covering predictive modeling, exploratory analysis, and natural language processing.',
    },
    {
      title: '[Add Additional Certification Title]',
      issuer: '[Add Issuing Organization, e.g., Coursera, DeepLearning.AI, Kaggle]',
      datePlaceholder: '[Add Date]',
      credentialIdPlaceholder: '[Add ID / None]',
      linkPlaceholder: '[Add Link / Upload File]',
      status: 'Pending Addition',
      description:
        'Placeholder for upcoming or existing certifications in Deep Learning, Python Specialization, Cloud Computing, or SQL.',
    },
  ] as CertificateItem[],
};
