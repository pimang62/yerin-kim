// ============================================================
// EDIT ME: all bio / education / experience / news content.
// Publications live in publications.js.
// ============================================================

export const profile = {
  name: "Ye Rin Kim",
  tagline: "LLMs, multi-modal models, and reasoning agents for scientific discovery",
  affiliation: "Korea University · M.S. in Artificial Intelligence",
  email: "yerin-kim@korea.ac.kr",
  interests:
    "Large language models and multi-modal models, with a focus on making them reason more reliably and align with human intent; recently, reasoning LLMs and agents for scientific discovery (molecular design, retrosynthesis, and reaction prediction) and multi-modal reasoning for image generation.",
  links: {
    github: "https://github.com/pimang62",
    scholar: "https://scholar.google.com/citations?hl=ko&user=ffhbyocAAAAJ",
    linkedin: "https://www.linkedin.com/in/pimang62",
  },
  bioHtml: `
    I am a current M.S. student in Artificial Intelligence at
    <strong>Korea University</strong>, studying large language models and multi-modal
    models. I am especially interested in making these models reason more reliably and
    align with what people actually intend. Previously, I was an AI Research Engineer in
    the Language Lab at <strong>LG AI Research</strong>, working on supervised fine-tuning
    and alignment tuning for chat LLMs. I hold a B.S. in Physics from Kyung Hee University.
  `,
};

// "news" renders on the home page. Only the big ones, most recent first.
export const news = [
  { date: "2026-10", text: "New first-author paper, RetroPlanner, is on arXiv and under review at ICLR 2027." },
  { date: "2026-10", text: "MolDesignBench was accepted to COLM 2026, and RetroReasoner to Findings of EMNLP 2026." },
  { date: "2026-09", text: "FiRe was accepted to NeurIPS 2026." },
  { date: "2025-12", text: "ReactionReasoner was accepted at the NeurIPS 2025 Workshop on AI for Science (AI4Science)." },
  { date: "2025-09", text: "Started my M.S. in Artificial Intelligence at Korea University." },
];

export const education = [
  { when: "Sep 2025 – Present", what: "Korea University · M.S. in Artificial Intelligence · GPA 4.0/4.5" },
  { when: "Mar 2017 – Feb 2022", what: "Kyung Hee University · B.S. in Physics · GPA 3.65/4.3" },
];

export const experience = [
  { when: "Aug 2024 – Jul 2025", what: "LG AI Research · AI Research Engineer, Language Lab (supervised by Dr. Dongkyu Lee): supervised fine-tuning and alignment tuning for chat LLMs — auto-evaluation, preference-set synthesis, and inference optimization" },
];

// Optional CV sections. Leave an array empty to hide its section.
export const awards = [];
export const services = [];
export const teaching = [];
