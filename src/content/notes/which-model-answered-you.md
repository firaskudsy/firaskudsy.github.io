---
title: "Which model actually answered you?"
description: "Provable inference: a cryptographic proof that the committed model produced the tokens."
pubDate: 2026-11-04  # placeholder: set to the day you actually post it
topic: Security
tags: [security, inference, trust]
kind: note
source:
  title: "Progress on provable inference for large language models"
  url: https://www.anthropic.com/research/provable-inference
  publisher: Anthropic Research
  date: 2026-11-02
linkedin: ""  # paste the LinkedIn post URL after posting
draft: false
---
a question i never really thought about .. when you call a model API, how do you know which model actually answered you?

you don't. a router could quietly swap in a cheaper model, and output quality alone won't prove anything.

Anthropic's Frontier Red Team published progress on "provable inference". the provider publishes a commitment to its weights, and every response comes with a cryptographic proof that the committed model produced those tokens. you verify it on normal hardware, without ever seeing the weights.

their system, FlashProve, on Llama 4 Maverick:

- ~110 tokens/sec on one H100
- roughly 72x overhead vs normal serving
- ~19MB proof per request, about 17 sec to verify on a CPU

the only earlier proof of the same model took 14.3 hours for 1,000 tokens and made a 93.6GB proof. big jump.

the limits are real, it only covers 1,024 token contexts for now. but for regulated clients asking "prove only the approved model touched our data" .. this is where things are going.
