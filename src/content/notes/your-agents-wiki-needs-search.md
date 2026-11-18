---
title: "Your agent's wiki still needs search under it"
description: "Wiki plus search beat either one alone, and saved about 20k tokens per question."
pubDate: 2026-11-15  # placeholder: set to the day you actually post it
topic: RAG
tags: [rag, memory, agents]
kind: note
source:
  title: "The components of agent memory"
  url: https://www.anthropic.com/research/components-of-agent-memory
  publisher: Anthropic Research
  date: 2026-11-06
linkedin: ""  # paste the LinkedIn post URL after posting
draft: false
---
this part of the Anthropic memory article was interesting for me..

they have an idea they call "dreaming". the agent goes back offline over its own logs, fixes wrong notes and organizes what it learned. in one Pokémon run, a wrong note about where a Pokémon Center was made Claude go off the same one-way ledge three times. dreaming checked the note against the transcript and fixed it.

then they used dreaming to build a wiki over ~350,000 files (around 420M tokens). on 25 questions:

- search alone: 53%
- wiki alone: went from 13% to 48% over the dreaming sessions
- wiki + search: 54% to 61%, and around 20k fewer tokens per question

so the wiki didn't replace search, it sat on top of it. and in another task the wiki grew to 1.77x the size of the source docs .. basically a map as big as the city.

my takeaway .. search over the raw history is the foundation. the summarized layer is a bonus, and it needs compute to maintain it or it rots.
