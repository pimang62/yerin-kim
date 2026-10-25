---
permalink: /
title: "Hi, I'm Ye Rin Kim 👋"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}

<section class="home-section">
  <h2>Research Overview</h2>
  <p>I'm a <strong>current M.S. student in Artificial Intelligence</strong> at Korea University,
  where I study large language models and multi-modal models. I'm especially interested in
  making these models reason more reliably and align with what people actually intend.</p>
  <p>My recent work spans reasoning LLMs and agents for scientific discovery — including
  molecular design, retrosynthesis, and chemical reaction prediction — as well as
  multi-modal reasoning for image generation. Before beginning my M.S., I worked as an
  AI Research Engineer in the Language Lab at <strong>LG AI Research</strong>, focusing on
  supervised fine-tuning and alignment tuning for chat LLMs.</p>
</section>

<section class="home-section">
  <h2>News</h2>
  <ul class="news-list">
    <li><span class="news-date">Oct 2026</span><span>New first-author paper, <em>RetroPlanner</em>, is on <a href="https://arxiv.org/abs/2610.16391" target="_blank" rel="noopener">arXiv</a> and under review at <strong>ICLR 2027</strong>.</span></li>
    <li><span class="news-date">Oct 2026</span><span><em>MolDesignBench</em> was accepted to COLM 2026, and <em>RetroReasoner</em> to Findings of EMNLP 2026.</span></li>
    <li><span class="news-date">Sep 2026</span><span><em>FiRe</em> was accepted to <strong>NeurIPS 2026</strong>.</span></li>
    <li><span class="news-date">Dec 2025</span><span><em>ReactionReasoner</em> was accepted at the NeurIPS 2025 Workshop on AI for Science (AI4Science).</span></li>
    <li><span class="news-date">Sep 2025</span><span>Started my M.S. in Artificial Intelligence at Korea University.</span></li>
  </ul>
</section>

<section class="home-section">
  <h2>Selected Publications</h2>
  {% comment %} Hand-picked, in display order. Edit this list to feature different papers. {% endcomment %}
  {% assign featured = "/publication/2026-10-12-retroplanner,/publication/2026-12-01-fire,/publication/2026-10-01-moldesignbench" | split: "," %}
  <ul class="cv-list">
    {% for slug in featured %}
      {% assign post = site.publications | where: "permalink", slug | first %}
      {% if post %}
    <li class="cv-item">
      <div class="cv-item-header">
        <span class="cv-item-title">{% if post.paperurl %}<a href="{{ post.paperurl }}" target="_blank" rel="noopener">{{ post.title }}</a>{% else %}{{ post.title }}{% endif %}</span>
        <span class="cv-item-date">{{ post.date | default: "1900-01-01" | date: "%Y" }}</span>
      </div>
      <div class="cv-item-subtitle">{{ post.venue }}</div>
    </li>
      {% endif %}
    {% endfor %}
  </ul>
  <p class="home-more"><a href="{{ base_path }}/publications/">See all publications →</a></p>
</section>

<section class="home-section">
  <h2>Get in Touch</h2>
  <p>I'm always glad to connect about research or collaboration. The best way to reach me is
  by email at <a href="mailto:yerin-kim@korea.ac.kr">yerin-kim@korea.ac.kr</a>. You can also
  find me on <a href="https://github.com/pimang62" target="_blank" rel="noopener">GitHub</a>,
  <a href="https://scholar.google.com/citations?hl=ko&user=ffhbyocAAAAJ" target="_blank" rel="noopener">Google Scholar</a>,
  and <a href="https://www.linkedin.com/in/pimang62" target="_blank" rel="noopener">LinkedIn</a>.</p>
</section>
