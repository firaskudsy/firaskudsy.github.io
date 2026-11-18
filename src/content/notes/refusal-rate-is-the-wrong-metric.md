---
title: "Refusal rate is the wrong metric"
description: "A model that refuses everything gets a perfect score and fails the people who need help."
pubDate: 2026-11-09  # placeholder: set to the day you actually post it
topic: Evals
tags: [evals, safety]
kind: note
source:
  title: "Building strong safety evaluations"
  url: https://www.anthropic.com/research/building-strong-safety-evaluations
  publisher: Anthropic Research
  date: 2026-11-13
linkedin: ""  # paste the LinkedIn post URL after posting
draft: false
---
Anthropic shared how they build safety evals and there is a simple example in it i really liked..

if you score a model on self-harm topics by "refusal rate", a model that refuses everything gets a perfect score. but it's failing the people who actually need help.

so they measure an "appropriate response rate" over multi-turn conversations, graded with domain rubrics. and they pair harmful prompts with harmless prompts on the same topic so over-refusal shows up too.

this is not only a safety thing. i think the same trap is in a lot of agent evals. "task completed" or "tests passed" is the easy metric .. it's not always what you mean.

their #1 advice if you only do three things: write down what you actually want to measure before you collect any data.
