---
title: "ReactionReasoner: Towards Reasoning LLM for Chemical Reaction Prediction"
collection: publications
category: conferences
permalink: /publication/2025-12-15-reactionreasoner
excerpt: 'We propose ReactionReasoner, an LLM trained on SyntheticReact-generated reasoning data that mirrors chemists'' strategic thinking, significantly outperforming models that attempt reaction predictions without step-by-step reasoning.'
date: 2025-12-15
venue: 'NeurIPS 2025 Workshop on AI for Science (AI4Science)'
paperurl: 'https://openreview.net/forum?id=KLwuymlNq7'
header:
  teaser: papers/reactionreasoner.png
citation: 'Hanbum Ko, Chanhui Lee, Ye Rin Kim, Rodrigo Hormazabal, Sehui Han, Sungbin Lim, Sungwoong Kim. (2025). &quot;ReactionReasoner: Towards Reasoning LLM for Chemical Reaction Prediction.&quot; <i>NeurIPS 2025 Workshop on AI for Science (AI4Science)</i>.'
---

We introduce ReactionReasoner, an LLM-based model for chemical reaction prediction that employs structured, step-by-step reasoning analogous to practicing chemists. Our data generation framework, SyntheticReact, collects reaction documents, extracts human chemist strategies, and structures them into reasoning data via an LLM. ReactionReasoner is trained through supervised fine-tuning on this data, with a self-bootstrapping approach: successful reasoning trajectories are used for further supervised training, while failed ones are converted into reflection data. ReactionReasoner significantly outperforms models that predict reactions without reasoning, demonstrating that detailed, chemist-like reasoning is critical for accurate reaction prediction.
