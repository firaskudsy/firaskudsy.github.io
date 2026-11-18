---
title: "Give strong models a purpose, not a rule book"
description: "Strict memory rules made strong models worse. Older models were the opposite."
pubDate: 2026-11-12  # placeholder: set to the day you actually post it
topic: Agents
tags: [agents, prompting, memory]
kind: note
source:
  title: "The components of agent memory"
  url: https://www.anthropic.com/research/components-of-agent-memory
  publisher: Anthropic Research
  date: 2026-11-06
linkedin: ""  # paste the LinkedIn post URL after posting
draft: false
---
one finding in the Anthropic agent memory article goes against how most of us write agent prompts..

when they gave the strong models a strict rule like "record only failures", the memory gains dropped. Opus 5 lost 0.234 on their benchmark. just telling it "a memory folder exists" and letting it decide worked better.

older models were the opposite. Sonnet 4.6 needed explicit instructions (read your memory, test your theories) and with that it went from 0.364 to 0.641.

and the always-loaded part has to stay small. longer instruction files reduce adherence, and Claude Code only loads the first 200 lines or 25KB of its memory index anyway.

so if your CLAUDE.md or agent instructions file is 900 lines of rules .. probably time to clean it. give a strong model a purpose, not a rule book. smaller or older models are a different story.
