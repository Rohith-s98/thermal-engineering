# PSC Prep

Study notes and exam plans for Mechanical JE, railway, SSC and Kerala PSC exams. The same files are published as a website on GitHub Pages so they can be shared: **https://rohith-s98.github.io/psc-prep/**

## What's here

| Path | What it is |
| --- | --- |
| `index.html` | Home page of the site: the plan, then every subject with its status (Ready or Planned). |
| `exam-plan.html` | Exam plan and topic map: which exams are open by age, the timeline, and the syllabus ranked by weightage. |
| `study.html` | Reader for the study guides. It renders a Markdown file from `notes/` with formulas, contents and a Hide answers mode. |
| `notes/<group>/<subject>.md` | The study guides themselves, one Markdown file per subject. These are the source of truth. |
| `assets/library.js` | The list the home page shows. Edit this when a guide is added or updated. |
| `assets/site.css` | Shared styles for the home page and reader. |

## Study guides

| Subject | File | Updated |
| --- | --- | --- |
| Thermal Engineering | [notes/mechanical/thermal-engineering.md](notes/mechanical/thermal-engineering.md) | 2026-10-27 |

## Adding a new guide

1. Write the guide in Claude (as a doc), then export it as Markdown.
2. Save it as `notes/<group>/<subject>.md`, for example `notes/mechanical/production-engineering.md`. Change any ` ```latex ` fences to ` ```math ` so GitHub shows the formulas too.
3. In `assets/library.js`, find the subject and add `doc`, `meta` and `updated`. For example: `doc: "mechanical/production-engineering"`.
4. Add a row to the table above, then commit and push. The site updates within a minute or two.

A new plan or other single-page tool (like the exam plan) goes in the root as its own `.html` file, with an entry under `plans` in `assets/library.js`.

## Viewing locally

The reader loads Markdown with `fetch`, which browsers block for files opened straight from disk. Serve the folder instead:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Where the originals live

These pages started as Claude artifacts. The originals are private to the owner's Claude account, so the links below only work for them:

- Thermal Engineering Study Guide: https://claude.ai/artifact/1HPVeWXuDLKfEvQnqgqJLU
- Mech JE Topic Map (exam plan): https://claude.ai/artifact/V9SewSZ2FAAF98mAZVuV1z
