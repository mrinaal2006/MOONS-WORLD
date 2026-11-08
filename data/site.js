// ─────────────────────────────────────────────────────────────
//  All website content lives here. Edit this file to update
//  text, contact details, universities and services.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Moon's World",
  tagline: "Dream • Learn • Achieve",
  description:
    "Residential & non-residential coaching for Class XI–XII, university admission guidance in Bankura & Durgapur, and academic consultancy for B.Tech, M.Tech and Ph.D.",
  // TODO: replace with real contact details
  phone: "+91 00000 00000",
  whatsapp: "910000000000", // country code + number, digits only
  email: "info@moonsworld.in",
  address: "Bankura & Durgapur, West Bengal, India",
};

// Thin strip shown above the menu bar on every page.
export const announcement = "Admissions open for Class XI – XII coaching";

export const nav = [
  { label: "Home", href: "/" },
  { label: "Coaching", href: "/services/coaching" },
  { label: "Admission", href: "/services/admission" },
  { label: "Consultancy", href: "/services/consultancy" },
  { label: "Contests", href: "/contests" },
  { label: "Contact", href: "/#contact" },
];

export const stats = [
  { value: "XI–XII", label: "Class coaching" },
  { value: "2", label: "Teachers per subject" },
  { value: "6+", label: "Partner universities" },
  { value: "B.Tech → Ph.D", label: "Project consultancy" },
];

// Universities / institutes for admission (handwritten plan lists 1–6).
// TODO: replace with real names and courses.
export const universities = [
  { name: "University 1", city: "Bankura", courses: "Courses to be announced" },
  { name: "University 2", city: "Bankura", courses: "Courses to be announced" },
  { name: "University 3", city: "Bankura", courses: "Courses to be announced" },
  { name: "University 4", city: "Durgapur", courses: "Courses to be announced" },
  { name: "University 5", city: "Durgapur", courses: "Courses to be announced" },
  { name: "University 6", city: "Durgapur", courses: "Courses to be announced" },
];

export const services = [
  {
    slug: "coaching",
    icon: "📚",
    tag: "Class XI – XII",
    title: "Residential / Non-Residential Coaching",
    short:
      "Focused coaching for Class XI–XII with two teachers for every subject, safe lodging and daily meals.",
    intro:
      "Choose to stay with us or attend as a day scholar. Both programmes follow the same syllabus, the same teachers and the same discipline, under the eye of an experienced retired Head Master of Ramkrishna Mission.",
    features: [
      {
        title: "Two subject teachers",
        text: "Every subject is taught by two teachers, so doubts are cleared from more than one angle.",
      },
      {
        title: "4 / 2 times food",
        text: "Four meals a day for residential students and two meals a day for non-residential students.",
      },
      {
        title: "Secure lodging",
        text: "Safe, supervised accommodation with a calm study environment for residential students.",
      },
      {
        title: "Expert supervision",
        text: "Overall supervision by a retired Head Master of Ramkrishna Mission: discipline, values and results.",
      },
    ],
    plans: [
      {
        name: "Residential",
        points: ["Coaching for XI–XII", "Two teachers per subject", "4 meals a day", "Secure lodging", "24×7 supervision"],
        highlight: true,
      },
      {
        name: "Non-Residential",
        points: ["Coaching for XI–XII", "Two teachers per subject", "2 meals a day", "Supervised study hours"],
      },
    ],
  },
  {
    slug: "admission",
    icon: "🎓",
    tag: "Bankura & Durgapur",
    title: "University Admission",
    short:
      "Admission guidance and support for universities and courses across Bankura and Durgapur.",
    intro:
      "We help students pick the right university and course, then handle the admission process from counselling to confirmation.",
    features: [
      { title: "Career counselling", text: "Find the course that fits your interests, marks and goals." },
      { title: "University selection", text: "Compare partner universities in Bankura and Durgapur." },
      { title: "Application support", text: "Forms, documents and deadlines, managed for you." },
      { title: "Confirmation", text: "Support until your seat is confirmed." },
    ],
    showUniversities: true,
  },
  {
    slug: "consultancy",
    icon: "🔬",
    tag: "B.Tech • M.Tech • Ph.D",
    title: "Academic Consultancy",
    short:
      "Project guidance for B.Tech and M.Tech, and complete Ph.D support from admission to completion.",
    intro:
      "Professional academic consultancy for engineering and research students, from a final-year project to a full doctoral journey.",
    features: [
      { title: "B.Tech Project", text: "Topic selection, implementation guidance, report and viva preparation." },
      { title: "M.Tech Project", text: "Research-oriented project and thesis guidance." },
      {
        title: "Ph.D: Admission to Completion",
        text: "End-to-end support for all courses: admission, coursework, research, publications and thesis.",
      },
    ],
  },
];

export const whyUs = [
  { icon: "🏫", title: "Mission-style discipline", text: "Supervised by a retired Head Master of Ramkrishna Mission." },
  { icon: "👩‍🏫", title: "Two teachers per subject", text: "Double the attention, double the clarity." },
  { icon: "🍲", title: "Food & lodging", text: "Healthy meals and secure stay, so students can focus on studies." },
  { icon: "🧭", title: "Guidance to Ph.D", text: "From Class XI coaching to doctoral research, under one roof." },
];

// ─────────────────────────────────────────────────────────────
//  CONTESTS: scholarship tests, hackathons, coding competitions
// ─────────────────────────────────────────────────────────────

export const contestCategories = [
  {
    key: "scholarship",
    icon: "🏆",
    title: "Scholarship Tests",
    text: "School-level scholarship exams. Top performers win fee waivers and rewards.",
  },
  {
    key: "hackathon",
    icon: "💡",
    title: "Hackathons",
    text: "Team up, build real solutions to real problems, and showcase your ideas.",
  },
  {
    key: "coding",
    icon: "💻",
    title: "Coding Competitions",
    text: "Test your problem-solving and programming skills against the best.",
  },
];

// Shown when there are no open/upcoming contests (or none in a category).
export const contestsNote =
  "Stay tuned! Scholarship tests, hackathons and coding competitions will be announced here with registration links.";

// Add a contest by copying the example below into the list.
//  • category : "scholarship" | "hackathon" | "coding"
//  • status   : "open" (shows Register button) | "upcoming" | "closed"
//  • formLink : your Google Form link (used by the Register button)
//  • banner   : an image put in /public/contests/ (e.g. "/contests/my-banner.jpg")
//               or a full image URL. Leave "" for an automatic banner.
//               Best size: 1200 × 630 px.
//
//  {
//    title: "Moon's World Scholarship Test 2027",
//    category: "scholarship",
//    status: "open",
//    date: "25 January 2027",
//    eligibility: "Class VIII – X",
//    description: "Win up to 100% scholarship on Class XI–XII coaching.",
//    formLink: "https://forms.gle/your-form-id",
//    banner: "/contests/scholarship-2027.jpg",
//  },
export const contests = [];
