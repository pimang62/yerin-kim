---
title: "RetroReasoner: A Reasoning LLM for Strategic Retrosynthesis Prediction"
collection: publications
category: preprints
permalink: /publication/2026-03-13-retroreasoner
excerpt: 'We propose RetroReasoner, a reasoning LLM for retrosynthesis prediction that employs structured disconnection rationales and reinforcement learning with round-trip accuracy as a reward signal, outperforming existing baselines on complex reactions.'
date: 2026-03-13
venue: 'arXiv preprint (Under Review at ICML)'
paperurl: 'https://arxiv.org/abs/2603.12666'
header:
  teaser: papers/retroreasoner.png
citation: 'Hanbum Ko, Chanhui Lee, Ye Rin Kim, Rodrigo Hormazabal, Sehui Han, Sungbin Lim, Sungwoong Kim. (2026). &quot;RetroReasoner: A Reasoning LLM for Strategic Retrosynthesis Prediction.&quot; <i>arXiv:2603.12666</i>.'
---

We address retrosynthesis prediction—determining reactants needed to synthesize target molecules—by introducing RetroReasoner, a reasoning LLM that employs strategic thinking analogous to expert chemists. Our framework, SyntheticRetro, generates structured disconnection rationales alongside reactant predictions via supervised fine-tuning. We further apply reinforcement learning using round-trip accuracy as a reward signal, where predicted reactants are validated through forward synthesis models. RetroReasoner outperforms existing baselines and produces a broader range of feasible reactant proposals for complex reactions.
