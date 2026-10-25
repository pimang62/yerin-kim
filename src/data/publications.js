// Publication order and grouping mirror the CV.
// selected: featured on the home page.
// firstAuthor: retained for reference.

export const publications = [
  // Preprints & under review
  {
    year: 2026, category: "preprint", firstAuthor: true, selected: true,
    title: "RetroPlanner: Multi-Route Expansion and Multi-Objective Reasoning for LLM-Based Retrosynthesis Planning",
    authors: "Ye Rin Kim, Yongjun Jeong, Seongjun Yun, Hanbum Ko, Soohyun Oh, Sungbin Lim, Sungwoong Kim",
    venue: "Under review at ICLR 2027",
    links: { paper: "https://arxiv.org/abs/2610.16391" },
  },

  // Conference papers
  {
    year: 2026, category: "conference", selected: true,
    title: "FiRe: Fine-grained Multimodal Reasoning for Enhanced Image Generation",
    authors: "Yongjin Kim, Yoonjin Oh, Ye Rin Kim, Hyomin Kim, Jeeyoung Yun, Yujung Heo, Minjun Kim, Sungwoong Kim",
    venue: "NeurIPS 2026",
    links: { paper: "https://openreview.net/forum?id=RBlcBaykle" },
  },
  {
    year: 2026, category: "conference", selected: true,
    title: "MolDesignBench: Evaluating LLM-based Agent for Scenario-grounded Molecular Design",
    authors: "Yongjun Jung, Hanbum Ko, Ye Rin Kim, Chanhui Lee, Rodrigo Hormazabal, Jaewan Lee, Sehui Han, Sungbin Lim, Sungwoong Kim",
    venue: "COLM 2026",
    links: { paper: "https://openreview.net/forum?id=4yhL4Wk0oW" },
  },
  {
    year: 2026, category: "conference",
    title: "RetroReasoner: A Reasoning LLM for Strategic Retrosynthesis Prediction",
    authors: "Hanbum Ko, Chanhui Lee, Ye Rin Kim, Rodrigo Hormazabal, Sehui Han, Sungbin Lim, Sungwoong Kim",
    venue: "Findings of EMNLP 2026",
    links: { paper: "https://arxiv.org/abs/2603.12666" },
  },
  {
    year: 2025, category: "conference",
    title: "ReactionReasoner: Towards Reasoning LLM for Chemical Reaction Prediction",
    authors: "Hanbum Ko, Chanhui Lee, Ye Rin Kim, Rodrigo Hormazabal, Sehui Han, Sungbin Lim, Sungwoong Kim",
    venue: "NeurIPS 2025 Workshop on AI for Science (AI4Science)",
    links: { paper: "https://openreview.net/forum?id=KLwuymlNq7" },
  },
];
