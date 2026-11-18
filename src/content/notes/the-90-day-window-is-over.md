---
title: "The 90-day disclosure window is over"
description: "When models find bugs and help write the fixes, the old timelines stop making sense."
pubDate: 2026-11-14  # placeholder: set to the day you actually post it
topic: Security
tags: [security, vulnerabilities]
kind: note
source:
  title: "Updating our coordinated vulnerability disclosure policy timelines"
  url: https://www.anthropic.com/research/coordinated-vulnerability-disclosure-timelines
  publisher: Anthropic Research
  date: 2026-11-16
linkedin: ""  # paste the LinkedIn post URL after posting
draft: false
---
Anthropic is cutting its vulnerability disclosure window from 90 days to 30 days for high and critical issues, and to 45 days for everything else. it applies to reports sent from January 1, 2027.

the reasoning is the interesting part. the old 90 day norm assumed two things .. fixes happen at human speed, and nobody else will find the same bug soon. both are not true anymore. models help write the fixes now, and a bug one model can find, another model will probably find too. they say they're already seeing more rediscovery.

90 days made sense when a bug could stay private for months. that time is over.

if your team still patches dependencies once a quarter .. that plan is getting old fast.
