---
title: "Teach agents to restart, not just continue"
description: "It threw away tangled layouts and wrote its own router in half an hour."
pubDate: 2026-11-05  # placeholder: set to the day you actually post it
topic: Engineering
tags: [agents, engineering]
kind: note
source:
  title: "Testing Claude on real-world electronics design"
  url: https://www.anthropic.com/research/claude-electronics-design
  publisher: Anthropic Research
  date: 2026-11-09
linkedin: ""  # paste the LinkedIn post URL after posting
draft: false
---
my favorite part of the Claude electronics design article is not the devices, it's the behavior..

earlier models used to give boards that were 95% done and unusable. this time, when the layout got messy, Claude noted the copper was getting too tangled to trace .. and started over. it deleted and rerouted tracks dozens of times.

and when KiCad's router was too slow for the long tracks, it wrote its own grid-based router in about half an hour.

knowing when to throw away your work and start again, and building your own tool when the existing one is in your way .. honestly that's what i look for in senior engineers too.

in agent design we spend a lot of effort making agents keep going. maybe we should spend more making them ok with restarting.
