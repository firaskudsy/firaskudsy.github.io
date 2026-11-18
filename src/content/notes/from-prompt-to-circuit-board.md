---
title: "From prompt to circuit board"
description: "Claude designed three working devices end to end, from spec to firmware."
pubDate: 2026-11-06  # placeholder: set to the day you actually post it
topic: Engineering
tags: [hardware, agents]
kind: note
source:
  title: "Testing Claude on real-world electronics design"
  url: https://www.anthropic.com/research/claude-electronics-design
  publisher: Anthropic Research
  date: 2026-11-09
linkedin: ""  # paste the LinkedIn post URL after posting
draft: false
---
a little over a year ago, models couldn't reliably lay out a circuit board. now Anthropic says Claude Fable 5.2 designed three working devices from short prompts .. a USB speakerphone, a home voice assistant hub, and a handheld virtual pet.

not just the code. the spec, schematic, PCB layout and routing, 3D printable enclosure, firmware, parts list and assembly instructions. Diode Computers built the boards from Claude's files with no back-and-forth revisions. the prompts were things like "clean up the schematic" and "continue".

on their internal PCB layout benchmark it went from 25% (Fable 5) to 69%.

they are clear these are early prototypes, no certification or thermal testing yet. but as a software guy, seeing the full loop from idea to a physical thing on the table is something else.
