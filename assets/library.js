/* Everything the home page lists. To add a study guide: put its markdown in notes/<group>/<slug>.md,
   then set `doc` on its subject below (and `meta` + `updated`). A subject without `doc` shows as Planned. */
window.LIBRARY = {
  title: "PSC Prep",
  subtitle: "Study notes and exam plans for Mechanical JE, railway, SSC and Kerala PSC exams",
  exams: "RRB · SSC · KPSC",
  branch: "Mechanical",
  updated: "2026-10-27",
  repo: "https://github.com/Rohith-s98/psc-prep",

  plans: [
    {
      title: "Exam plan and topic map",
      href: "exam-plan.html",
      desc: "Which exams are still open by age, the timeline to the end of 2027, and the mechanical syllabus ranked by weightage with a tick-off list.",
      updated: "2026-10-27"
    }
  ],

  groups: [
    {
      name: "Technical: Mechanical",
      note: "Ranked by average share of technical questions across RRB JE, SSC JE and Kerala PSC AE",
      subjects: [
        { title: "Thermal Engineering", weight: 18.5, doc: "mechanical/thermal-engineering",
          meta: "10 sub-topics · formulas · 56 past exam questions with answers", updated: "2026-10-27" },
        { title: "Production Engineering", weight: 17.8 },
        { title: "Engineering Mechanics & SOM", weight: 15.5 },
        { title: "Theory of Machines & Design", weight: 12.2 },
        { title: "Industrial Engineering", weight: 10.7 },
        { title: "Fluid Mechanics & Machines", weight: 9.5 },
        { title: "Material Science & Metallurgy", weight: 6.3 },
        { title: "Heat Transfer", weight: 4.3 },
        { title: "Metrology & Measurements", weight: 3.0 }
      ]
    },
    {
      name: "General section",
      note: "Needed for RRB JE CBT-1 and SSC JE Paper 1",
      subjects: [
        { title: "Reasoning" },
        { title: "General Awareness" },
        { title: "General Science" },
        { title: "Mathematics" }
      ]
    }
  ]
};
