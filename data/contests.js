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
      { key: "prizes", label: "Prizes", icon: "🏅", type: "prizes" },
      { key: "prizeNote", label: "", icon: "", type: "note" },
      { key: "conductedBy", label: "Conducted by", icon: "🏫", type: "text" },
      { key: "sponsoredBy", label: "Sponsored by", icon: "🤝", type: "text" },
      { key: "keyInfo", label: "Key information", icon: "📌", type: "list" },
      { key: "contact", label: "Enquiries / registration", icon: "📞", type: "text" },
      { key: "address", label: "Centre address", icon: "📍", type: "text" },
      { key: "disclaimer", label: "Important disclosure", icon: "⚠️", type: "note" },
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
      { key: "collaborator", label: "In collaboration with", icon: "🤝", type: "text" },
      { key: "problem", label: "Problem statement", icon: "🧩", type: "text" },
      { key: "eligibility", label: "Eligibility", icon: "🎯", type: "text" },
      { key: "teamSize", label: "Team size", icon: "👥", type: "text" },
      { key: "seats", label: "Seats", icon: "⚡", type: "text" },
      { key: "date", label: "Event date", icon: "📅", type: "text" },
      { key: "venue", label: "Venue", icon: "📍", type: "text" },
      { key: "prizes", label: "Prizes", icon: "🏅", type: "prizes" },
      { key: "prizeNote", label: "", icon: "", type: "note" },
      { key: "instructions", label: "Registration instructions", icon: "📝", type: "list" },
      { key: "contact", label: "Queries & support", icon: "📞", type: "text" },
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
//   banner    : optional image in /public/contests/ (1200 × 630 px), shown on both cards
//   thumb     : optional image (1200 × 630 px) shown only on the short card (home page, /contests)
//   poster    : optional full poster, opened by the "View poster" button
// Plus the category's own fields (see `fields` above), e.g. for a scholarship test:
//   { id: "mw-scholarship-2027", category: "scholarship", group: "Class IX – X",
//     title: "…", status: "open", eligibility: "…", examPattern: "…",
//     syllabus: ["…", "…"], dates: [{ label: "Last date to register", date: "…" }],
//     rewards: "…", formLink: "https://forms.gle/…" }
export const contests = [
  {
    id: "kcg-scholarship-2026",
    category: "scholarship",
    group: "Class IX – X",
    featured: true,
    title: "Keshab Chandra Goswami Scholarship Test 2026",
    subtitle: "An academic opportunity for students of Classes IX and X | WBBSE",
    description:
      "Moon's World is organising the Keshab Chandra Goswami Scholarship Test 2026 for students of Classes IX and X under WBBSE. The initiative is intended to recognise meritorious students and provide educational support towards their future studies in Classes XI and XII.",
    status: "open",
    eligibility: "Students currently studying in Class IX or X under WBBSE.",
    examPattern: "Online test · Full marks: 40",
    dates: [
      { label: "Registration deadline", date: "09 December 2026" },
      { label: "Examination date", date: "10 December 2026" },
    ],
    prizes: [
      { place: "First Prize", items: ["₹1,00,000 tuition support*", "₹5,000 cash award", "Memento • Certificate • Gift Set"] },
      { place: "Second Prize", items: ["₹75,000 tuition support*", "₹3,000 cash award", "Memento • Certificate • Gift Set"] },
      { place: "Third Prize", items: ["₹50,000 tuition support*", "₹2,000 cash award", "Memento • Certificate • Gift Set"] },
    ],
    prizeNote:
      "*Tuition support is intended for regular/residential studies in Classes XI–XII at the Moon's World campus, subject to eligibility verification, admission, available funding and the final published scholarship terms. It is not a cash payment to the student.",
    conductedBy: "Moon's World",
    sponsoredBy: "Subhankar Sarani Keshab Chandra Goswami Mission (NGO registration details stated by the sponsor: 97557 of 2012–2013)",
    keyInfo: [
      "Eligible applicants: students currently studying in Classes IX or X under WBBSE.",
      "Examination: Online | Full marks: 40 | Date: 10 December 2026.",
      "Registration closes: 09 December 2026.",
      "Test link and instructions will be communicated to the registered contact number/email.",
    ],
    contact: "7001828820 / 9434588477",
    address: "Scan Centre, Katjuridanga, Bankura – 722102",
    disclaimer:
      "The scholarship test is independently organised by Moon's World. It is not represented as an examination conducted, approved or endorsed by WBBSE, the Government of West Bengal or any participating school. Registration/payment does not guarantee selection or an award. All awards are subject to verification and the final published rules.",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSegyMPMA0xSPP0r-NbhPkvkYc9WbLVkN6npTMXwFlyjZw4IHg/viewform",
  },
  {
    id: "hackathon-2026",
    category: "hackathon",
    group: "College",
    featured: true,
    title: "HACKATHON 2026",
    subtitle: "Innovate | Collaborate | Code | Create Impact",
    description:
      "Moon's World, in collaboration with AICT Pvt. Ltd. – We Make It Happen, proudly presents HACKATHON 2026, an exciting opportunity for students, developers, innovators and creative thinkers to showcase their technical skills, solve real-world problems and transform innovative ideas into reality.",
    status: "open",
    organizer: "Moon's World",
    collaborator: "AICT Pvt. Ltd. – We Make It Happen (Krishna Kumar Yadav, Director)",
    eligibility: "Students, developers, innovators and creative thinkers.",
    seats: "Limited seats: maximum 30 teams",
    date: "28 November 2026",
    venue: "Anovatech Institute of Crystalline Technology Pvt. Ltd., A1/21, Sahid Sukumar Banerjee Sarani, Aranyak (West), Bidhannagar, Durgapur, West Bengal – 713212",
    prizes: [
      { place: "1st Prize", items: ["₹6,000"] },
      { place: "2nd Prize", items: ["₹2,000"] },
      { place: "3rd Prize", items: ["₹1,000"] },
      { place: "4th Prize", items: ["₹600"] },
    ],
    prizeNote: "Prize distribution venue will be announced later.",
    instructions: [
      "Fill in all the required details accurately.",
      "Provide valid contact information.",
      "Enter the correct team details.",
      "Complete the registration process as instructed by the organizers.",
    ],
    contact: "+91 9434588477",
    poster: "/contests/hackathon-2026-poster-v2.jpg",
    thumb: "/contests/hackathon-2026-card.jpg", // image on the short contest card (home page, /contests)
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdkvvDyJU1cJGlbeAsRwkylivYxakY527OdOAmx620mriiruw/viewform?usp=dialog",
  },
];
