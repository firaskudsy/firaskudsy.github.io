---
title: "Fitting is the easy part"
description: "From Hodgkin-Huxley to today's AI agents: many models fit, few explain."
pubDate: 2026-10-30  # placeholder: set to the day you actually post it
topic: Science
tags: [ml, science]
kind: note
source:
  title: "Teaching AI to build scientific models"
  url: https://www.anthropic.com/research/teaching-ai-to-build-scientific-models
  publisher: Anthropic Research
  date: 2026-11-06
linkedin: ""  # paste the LinkedIn post URL after posting
draft: false
---
reading "Teaching AI to build scientific models" (by Tübingen researchers, on Anthropic's site) reminded me that fitting is the easy part.

in 1951 Hodgkin and Huxley modeled how a squid nerve cell fires. Huxley solved the equations by hand on a mechanical calculator, over three weeks, because the university computer was down. to fit the data they needed a variable to the 4th power, and they guessed it meant four moving parts in the membrane. decades later a related channel was found with four identical subunits. the model was never fit to that.

the authors' point is that many different models can fit the same data, so one "best fit" hides the alternatives. AI agents can now propose, run and compare lots of candidate models .. but so far they mostly rediscovered known ones.

Hamming said it in 1962, the purpose of computing is insight, not numbers. still true with LLMs.
