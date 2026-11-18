---
title: "4 points worse? Show me the interval"
description: "Same model, different config: up to 34 points apart. And 98% vs 94% wasn't significant."
pubDate: 2026-11-08  # placeholder: set to the day you actually post it
topic: Evals
tags: [evals]
kind: note
source:
  title: "Building strong safety evaluations"
  url: https://www.anthropic.com/research/building-strong-safety-evaluations
  publisher: Anthropic Research
  date: 2026-11-13
linkedin: ""  # paste the LinkedIn post URL after posting
draft: false
---
two things from Anthropic's evals article every AI team should know..

first, same model, different setup. for Claude Fable 5.1 they saw a gap of up to 34 points between the API config and the claude.ai config. in one self-harm eval, a system prompt fix took the appropriate response rate from 60% on the API to 94% on claude.ai. so "the model scored X" means nothing without the full config.

second, noise. Opus 5 got 98% and Opus 5.5 got 94% on a romance scams eval .. and that difference was not statistically significant. multi-turn confidence intervals can go past ±10 points.

so next time someone says the new model is 4 points worse on our internal eval .. ask how many samples and what's the interval. they suggest at least 100 items for complex multi-turn evals and 1,000 for simple single-turn ones.
