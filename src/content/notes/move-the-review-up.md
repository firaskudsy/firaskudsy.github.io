---
title: "Move the review up: specs over diffs"
description: "When agents write more code than we can review, check the properties, not every line."
pubDate: 2026-11-03  # placeholder: set to the day you actually post it
topic: Engineering
tags: [engineering, verification, ai-coding]
kind: note
source:
  title: "Progress on provable inference for large language models"
  url: https://www.anthropic.com/research/provable-inference
  publisher: Anthropic Research
  date: 2026-11-02
linkedin: ""  # paste the LinkedIn post URL after posting
draft: false
---
one sentence in the Anthropic provable inference paper that anyone using AI coding agents will relate to..

they say Claude is good at optimization but often makes decisions that are hard to evaluate, especially in large complex systems.

their answer was not "review every line". they wrote the protocol and its security properties in Lean and proved the top-level statements formally. so the fast code can be AI optimized, and the guarantees that matter are checked by a machine.

i think we'll see this pattern a lot more. when agents write more code than humans can review, the review moves up .. to specs, properties and contracts, not line by line diffs.

(they are also honest that the paper, the Lean spec and the fast code aren't guaranteed to match each other yet. not perfect, but the direction makes sense)
