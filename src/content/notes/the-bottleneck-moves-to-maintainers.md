---
title: "When finding bugs is cheap, the bottleneck is the maintainer"
description: "Shorter disclosure clocks land on open source maintainers first."
pubDate: 2026-11-07  # placeholder: set to the day you actually post it
topic: Security
tags: [security, open-source]
kind: note
source:
  title: "Updating our coordinated vulnerability disclosure policy timelines"
  url: https://www.anthropic.com/research/coordinated-vulnerability-disclosure-timelines
  publisher: Anthropic Research
  date: 2026-11-16
linkedin: ""  # paste the LinkedIn post URL after posting
draft: false
---
one more thought on the Anthropic disclosure change (90 days down to 30 for serious bugs)..

the people who will feel it most are open source maintainers. a lot of them are volunteers, and now the clock is 3x faster.

to be fair, Anthropic says each report will come with actionable guidance and a patch or mitigation where possible, and they'll agree on a pace with a project before sending it a lot of findings. there is also OSS Scanner, free scanning for critical open source projects, and maintainers can apply for six months of Claude Ultra at no cost.

still .. if AI makes finding bugs cheap, the bottleneck moves to the humans who review, merge and release the fix. we should talk about that side too, not only how many bugs the model found.

if you maintain something important, check those programs.
