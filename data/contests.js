// ─────────────────────────────────────────────────────────────
//  CONTESTS: categories (each has its own page) + contest list
// ─────────────────────────────────────────────────────────────
//
// Each category gets a dedicated page at /contests/<slug>.
//  • groups   : how contests are divided on the page (filter tabs + badge)
//  • sections : status buckets shown as separate blocks (null → one block per group)
//  • fields   : which details each contest card shows, in order
//      type "text" → plain value, "list" → bullet list, "dates" → [{ label, date }]

export const contestCategories = [
  {
    key: "scholarship",
    slug: "scholarship-tests",
    icon: "🏆",
    title: "Scholarship Tests",
    chips: ["Class VI – VIII", "Class IX – X", "Class XI – XII"],
    text: "School-level scholarship exams. Top performers win fee waivers and rewards.",
    intro:
      "School-level scholarship examinations for students of Class VI to XII. Compare eligibility, exam pattern, syllabus and rewards, then register through the official link.",
    groupLabel: "Class",
    groups: [
      { value: "Class VI – VIII", label: "Class VI – VIII" },
      { value: "Class IX – X", label: "Class IX – X" },
      { value: "Class XI – XII", label: "Class XI – XII" },
    ],
    sections: null, // one block per class group, filterable by status
    fields: [
      { key: "eligibility", label: "Eligibility", icon: "🎯", type: "text" },
      { key: "examPattern", label: "Exam pattern", icon: "📝", type: "text" },
      { key: "syllabus", label: "Syllabus", icon: "📚", type: "list" },
      { key: "dates", label: "Important dates", icon: "📅", type: "dates" },
      { key: "rewards", label: "Rewards", icon: "🎁", type: "text" },
    ],
    steps: ["Choose the test for your class", "Register using the official link", "Appear for the test and check results"],
  },
  {
    key: "hackathon",
    slug: "hackathons",
    icon: "💡",
    title: "Hackathons",
    chips: ["School", "College"],
    text: "Team up, build real solutions to real problems, and showcase your ideas.",
    intro:
      "Team-based innovation events for school and college students. See the problem statement, team size, eligibility and prizes before you register.",
    groupLabel: "Level",
    groups: [
      { value: "School", label: "School Level" },
      { value: "College", label: "College Level" },
    ],
    sections: [
      { key: "upcoming", title: "Upcoming Hackathons", statuses: ["open", "upcoming", "ongoing"], empty: "No upcoming hackathons available. Stay tuned!" },
      { key: "past", title: "Past Hackathons", statuses: ["closed", "past"], empty: "No past hackathons yet." },
    ],
    fields: [
      { key: "organizer", label: "Organizer", icon: "🏛️", type: "text" },
      { key: "problem", label: "Problem statement", icon: "🧩", type: "text" },
      { key: "eligibility", label: "Eligibility", icon: "🎯", type: "text" },
      { key: "teamSize", label: "Team size", icon: "👥", type: "text" },
      { key: "date", label: "Event date", icon: "📅", type: "text" },
      { key: "prizes", label: "Prizes", icon: "🏅", type: "text" },
    ],
    steps: ["Form your team", "Register using the official link", "Build, present and win"],
  },
  {
    key: "coding",
    slug: "coding-competitions",
    icon: "💻",
    title: "Coding Competitions",
    chips: ["Beginner", "Advanced"],
    text: "Test your problem-solving and programming skills against the best.",
    intro:
      "Programming contests for beginners and advanced coders. Check the topics, rules, start date and duration, then register through the official link.",
    groupLabel: "Difficulty",
    groups: [
      { value: "Beginner", label: "Beginner" },
      { value: "Advanced", label: "Advanced" },
    ],
    sections: [
      { key: "ongoing", title: "Ongoing Competitions", statuses: ["ongoing"], empty: "No competitions are running right now." },
      { key: "upcoming", title: "Upcoming Competitions", statuses: ["open", "upcoming"], empty: "No upcoming contests available. Stay tuned!" },
    ],
    fields: [
      { key: "difficulty", label: "Difficulty", icon: "📶", type: "text" },
      { key: "topics", label: "Topics", icon: "🧠", type: "list" },
      { key: "rules", label: "Rules", icon: "📋", type: "list" },
      { key: "startDate", label: "Start date", icon: "📅", type: "text" },
      { key: "duration", label: "Duration", icon: "⏱️", type: "text" },
      { key: "prizes", label: "Prizes", icon: "🏅", type: "text" },
    ],
    steps: ["Pick your level", "Register using the official link", "Solve problems and climb the leaderboard"],
  },
];

export const categoryBySlug = (slug) => contestCategories.find((c) => c.slug === slug);
export const categoryByKey = (key) => contestCategories.find((c) => c.key === key);

export const statusLabel = {
  open: "Registration Open",
  upcoming: "Coming Soon",
  ongoing: "Ongoing",
  closed: "Closed",
  past: "Completed",
};

// Shown when there are no open/upcoming contests (or none in a category).
export const contestsNote =
  "Stay tuned! Scholarship tests, hackathons and coding competitions will be announced here with registration links.";

// ── Contest list ─────────────────────────────────────────────
// Add real contests only. Common fields for every entry:
//   id        : unique, e.g. "scholarship-2027"
//   category  : "scholarship" | "hackathon" | "coding"
//   group     : one of that category's group values (e.g. "Class IX – X", "College", "Advanced")
//   title     : contest name
//   status    : "open" | "upcoming" | "ongoing" | "closed" | "past"
//   formLink  : official registration link (Register button only appears if set)
//   banner    : optional image in /public/contests/ (1200 × 630 px)
// Plus the category's own fields (see `fields` above), e.g. for a scholarship test:
//   { id: "mw-scholarship-2027", category: "scholarship", group: "Class IX – X",
//     title: "…", status: "open", eligibility: "…", examPattern: "…",
//     syllabus: ["…", "…"], dates: [{ label: "Last date to register", date: "…" }],
//     rewards: "…", formLink: "https://forms.gle/…" }
export const contests = [];
