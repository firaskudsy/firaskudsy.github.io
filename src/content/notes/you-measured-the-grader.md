---
title: "If the grader changes the result, you measured the grader"
description: "What Anthropic's safety evals guide says about LLM-as-a-judge."
pubDate: 2026-11-16  # placeholder: set to the day you actually post it
topic: Evals
tags: [evals, llm-as-judge]
kind: note
source:
  title: "Building strong safety evaluations"
  url: https://www.anthropic.com/research/building-strong-safety-evaluations
  publisher: Anthropic Research
  date: 2026-11-13
linkedin: ""  # paste the LinkedIn post URL after posting
draft: false
---
if you use LLM-as-a-judge, one idea from the Anthropic evals article is worth putting on the wall..

if your conclusion changes when you change the grader, you measured the grader, not the model.

what they recommend for graders:

- simple yes/no criteria, one thing at a time
- say clearly what doesn't count
- a disclaimer doesn't make a bad answer ok
- watch for bias toward longer answers, position, and the judge's own outputs
- have experts label transcripts blind, then compare grader-vs-expert agreement with expert-vs-expert agreement (Cohen's kappa)

and if the experts don't agree with each other .. the question itself is probably the problem.

one failure they mention made me laugh .. a grader sees a single "Yes" and passes a reply that actually refused.

did you validate your judge against humans before trusting the numbers?
