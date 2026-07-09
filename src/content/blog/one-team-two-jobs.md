---
title: One team, two jobs
date: 2026-07-08
excerpt: Companies are putting AI to work across their teams, and the same pattern keeps showing up: the engineers in the middle of it end up doing two jobs at once.
---
Companies are putting AI to work across their teams, and the same pattern keeps showing up: the engineers in the middle of it end up doing two jobs at once.

The first is building the platform. The guardrails, the governance, the observability, the access, and the reusable tooling that lets people who aren't engineers build their own automations without breaking something. It's hard on its own, mostly because the tools underneath keep changing every few months, not considering the many creative ways non-technical teams spin up systems that tie infrastructure into a pretzel. You're trying to pave a road while the route is still moving and shifting.

The second is building the actual automations and agents those teams need right now to keep up with their work, increase productivity, and then coaching them until they can do it themselves.

The engineers who can do both usually get asked to do both at the same time, and every backlog turns into a quiet argument between the two.

One project made that tradeoff real for me. I spent time with a team whose answers have to hold up, because a wrong one would create real problems for real people. Their information came from several sources that didn't always align cleanly, and what they wanted sounded simple. They needed an agent that could cite where its answer came from and stand behind it. It became one of the harder problems I've worked on, because this is exactly the kind of work where current models are weakest, and a confident wrong answer is the worst thing that can happen. Plain retrieval wasn't enough, so we prototyped a graph-based version that connected the overlapping language across their sources and gave the model more complete context to reason over.

We got it working as a proof of concept, and then we chose not to take it further. The work was clearly worth doing. But doing it right would have meant putting one engineer with that one team for weeks, while the rest of the company was still waiting on the shared platform everyone depends on. A platform team building for the whole org can't also hand-build every team's custom agent or automation. That team just needed engineers of its own.

That's the gap a lot of companies are sitting in right now. The most valuable internal AI work is often too specific for the platform team to take on and too involved for the team to build by itself, so it sits in the middle, unbuilt, in a queue.

The answer I keep coming back to is the embedded engineer, or a forward-deployed engineer. Someone who sits with one team, understands both the technology and the work that team actually does, and builds toward the day they aren't needed anymore. You need the platform to make self-service possible across the org, and you still need someone close enough to one team to actually get them there.

I'm not the only one seeing this. Boris Cherny, who works on Claude Code at Anthropic, recently described the same shift, where engineering, product, design, and data science stop lining up with the job titles we grew up with. The work that matters most gets done by people who can move across all of it.

That is the role I just stepped into at Life360 as a forward-deployed AI partner engineer, and it is a big part of why I'm excited. It asks for the full span of what I've spent my career and my education building toward, from engineering to product research to design, in one job. I shared the news a few days ago, and this post is the thinking underneath it.
