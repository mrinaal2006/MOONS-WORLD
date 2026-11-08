// ─────────────────────────────────────────────────────────────
//  All website content lives here. Edit this file to update
//  text, contact details, universities and services.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Moon's World",
  tagline: "Dream • Learn • Achieve",
  description:
    "Residential & non-residential coaching for Class XI–XII, online courses from IIIT & renowned universities, and academic consultancy for B.Tech, M.Tech and Ph.D.",
  phone: "+91 79085 74323",
  phone2: "+91 70018 28820",
  phone3: "+91 94345 88477",
  whatsapp: "917908574323", // country code + number, digits only
  email: "", // add an email address here to show it on the site
  address: "Scan Centre, Katjuridanga, Bankura – 722102, West Bengal",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Scan+Centre+Katjuridanga+Bankura+722102",
};

// Leadership shown on the home page (photos are in /public/team/)
export const team = [
  {
    name: "Biswajit Mondal",
    role: "Advisor",
    photo: "/team/advisor.jpg",
    bio: "Guides the vision of Moon's World, with a focus on values, character and the all-round development of every student.",
    quote: "শরীর তো চলেই যাবে একদিন; পারো তো বিবেকটাকে বাঁচিয়ে রেখো। মৃত দেহের চাইতে মৃত বিবেকই বেশি ভয়ঙ্কর।",
  },
  {
    name: "Biswabaran Sir",
    role: "Institute Superintendent",
    credential: "Ex. Head Master, Ramkrishna Mission, Garbetha",
    photo: "/team/superintendent.jpg",
    bio: "Expert coaching by experienced teachers under his direct supervision, bringing the discipline and values of Ramkrishna Mission to every student.",
    phone: "+91 79085 74323",
  },
];

// Hostels (from the Moon's World flyer)
export const hostels = [
  {
    name: "Moon's Residency",
    tag: "Boys & Girls",
    location: "Katjuridanga, Bankura",
    points: ["Separate boys' and girls' hostel", "Four-time food facility", "Option to stay without food"],
    phone: "+91 79085 74323",
  },
  {
    name: "মায়া ছাত্রীনিবাস (Maya Chhatrinibas)",
    tag: "Girls' Hostel",
    location: "Pranabanandapalli, Bankura",
    points: ["Stay only", "Stay + food + coaching"],
    phone: "+91 79085 74323 / +91 70018 28820",
  },
];

// Thin strip shown above the menu bar on every page.
export const announcement = "বিশেষ ভর্তি সুযোগ • Class XI • ₹6000/month";

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Coaching", href: "/services/coaching" },
  { label: "Admission", href: "/#admission" },
  { label: "Consultancy", href: "/services/consultancy" },
  { label: "Online Courses", href: "/services/online-courses" },
  { label: "Contests", href: "/contests" },
  { label: "Contact", href: "/#contact" },
];

export const stats = [
  { value: "XI–XII", label: "Class coaching" },
  { value: "2", label: "Teachers per subject" },
  { value: "13", label: "Online partner universities" },
  { value: "B.Tech → Ph.D", label: "Project consultancy" },
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
      "Choose to stay with us or attend as a day scholar. Both programmes follow the same syllabus, the same teachers and the same discipline, under the direct supervision of Biswabaran Sir, Ex. Head Master, Ramkrishna Mission, Garbetha.",
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
        text: "Separate boys' and girls' hostels at Moon's Residency, Katjuridanga, plus a girls' hostel at Pranabanandapalli.",
      },
      {
        title: "Expert supervision",
        text: "Direct supervision by Biswabaran Sir, Ex. Head Master, Ramkrishna Mission, Garbetha: discipline, values and results.",
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
  {
    slug: "online-courses",
    icon: "🌐",
    tag: "IIIT & Renowned Universities",
    title: "Online Course Admission",
    short:
      "Admission guidance for online degree, diploma and certificate programmes offered by IIIT Vadodara and renowned NAAC-accredited universities.",
    intro:
      "Study at a top institute from home. We help you choose the right online programme from IIIT Vadodara and renowned universities across India, check eligibility, and guide you through the application and admission process.",
    features: [
      { title: "UG degree programmes", text: "BA, B.Com, B.Sc, BBA and BCA, including apprenticeship and work-linked options." },
      { title: "PG programmes", text: "MBA in many specialisations (Marketing, Finance, HR, Business Analytics, Logistics and more) and MCA." },
      { title: "Apprenticeship & work-linked degrees", text: "Earn your degree while gaining real work experience through apprenticeship-embedded programmes." },
      { title: "End-to-end admission help", text: "Programme selection, eligibility check, application, qualifier exam preparation and enrolment support." },
    ],
    showOnlinePrograms: true,
  },
];

export const whyUs = [
  { icon: "🏫", title: "Mission-style discipline", text: "Under the direct supervision of Biswabaran Sir, Ex. Head Master, Ramkrishna Mission, Garbetha." },
  { icon: "👩‍🏫", title: "Two teachers per subject", text: "Double the attention, double the clarity." },
  { icon: "🍲", title: "Food & lodging", text: "Healthy meals and secure stay, so students can focus on studies." },
  { icon: "🧭", title: "Guidance to Ph.D", text: "From Class XI coaching to doctoral research, under one roof." },
];

// Online programmes (universities, courses, fees) live in data/onlinePrograms.js
export { onlineInstitutes } from "./onlinePrograms";

// ─────────────────────────────────────────────────────────────
//  CONTESTS: scholarship tests, hackathons, coding competitions
// ─────────────────────────────────────────────────────────────

export const contestCategories = [
  {
    key: "scholarship",
    icon: "🏆",
    title: "Scholarship Tests",
    chips: ["Class VI – VIII", "Class IX – X", "Class XI – XII"],
    text: "School-level scholarship exams. Top performers win fee waivers and rewards.",
  },
  {
    key: "hackathon",
    icon: "💡",
    title: "Hackathons",
    chips: ["School", "College"],
    text: "Team up, build real solutions to real problems, and showcase your ideas.",
  },
  {
    key: "coding",
    icon: "💻",
    title: "Coding Competitions",
    chips: ["Beginner", "Advanced"],
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

// ─────────────────────────────────────────────────────────────
//  ABOUT: shown on the home page (#about)
// ─────────────────────────────────────────────────────────────
export const about = {
  paragraphs: [
    "Moon's World is an educational initiative based in Bankura, West Bengal, offering residential and non-residential educational and coaching support. The centre focuses on academic guidance for students of Classes XI and XII, with preparation support for West Bengal Board examinations, NEET and IIT-JEE.",
    "Our approach is centred on strengthening conceptual understanding, developing analytical and problem-solving abilities, and helping students pursue their academic goals through structured guidance and a supportive learning environment.",
  ],
  vision:
    "To create an accessible and supportive learning environment where academic excellence, discipline and individual growth go hand in hand.",
  mission:
    "To identify students' potential, strengthen their academic foundations and provide opportunities for higher educational achievement.",
  focus: [
    {
      icon: "🏫",
      title: "School-Level Academic Guidance",
      text: "Academic support for Classes XI and XII, with emphasis on conceptual clarity and board-examination preparation.",
    },
    {
      icon: "⚙️",
      title: "IIT-JEE Preparation",
      text: "Guidance for engineering entrance preparation, including mathematical reasoning, Physics and Chemistry.",
    },
    {
      icon: "🩺",
      title: "NEET Preparation",
      text: "Preparation support in Physics, Chemistry and Biology for students aspiring to pursue medical education.",
    },
    {
      icon: "🏠",
      title: "Residential & Non-Residential Learning",
      text: "Educational support in residential and non-residential formats. Accommodation and food arrangements should be confirmed with the centre.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
//  SPECIAL ADMISSION OFFER (from the Class XI admission flyer)
// ─────────────────────────────────────────────────────────────
export const admissionOffer = {
  kicker: "উজ্জ্বল ভবিষ্যতের প্রথম পদক্ষেপ",
  title: "বিশেষ ভর্তি সুযোগ!",
  subtitle: "Special admission for Class XI (একাদশ শ্রেণী) students",
  slogan: "শিখুন • গড়ুন • সফল হোন",
  fee: "₹6000",
  feeNote: "per month (প্রতি মাস)",
  location: "Bankura (বাঁকুড়া)",
  flyer: "/gallery/admission-flyer.jpg",
  facilities: [
    { icon: "🛏️", title: "Hostel accommodation", bn: "আবাসনের ব্যবস্থা", text: "Clean and safe hostel facility." },
    { icon: "🍽️", title: "4 nutritious meals a day", bn: "দিনে ৪ বেলা পুষ্টিকর খাবার", text: "Balanced, healthy food every day." },
    { icon: "📖", title: "Complete tuition & academic support", bn: "সম্পূর্ণ টিউশন ও একাডেমিক সহায়তা", text: "Subject-wise classes, notes and problem solving." },
    { icon: "📝", title: "Weekly tests & evaluation", bn: "সাপ্তাহিক পরীক্ষা ও মূল্যায়ন", text: "Regular assessment to keep improving." },
    { icon: "👨‍🏫", title: "Experienced, caring teachers", bn: "অভিজ্ঞ ও যত্নশীল শিক্ষকবৃন্দ", text: "Personal attention to every student." },
    { icon: "🎯", title: "Career guidance & counselling", bn: "ক্যারিয়ার গাইডেন্স ও কাউন্সেলিং", text: "Right direction for future plans and mental support." },
    { icon: "🛡️", title: "Disciplined & safe environment", bn: "শৃঙ্খলাবদ্ধ ও নিরাপদ পরিবেশ", text: "24×7 security and a calm study atmosphere." },
    { icon: "👥", title: "Limited seats, small batches", bn: "সীমিত আসন • ব্যক্তিগত গুরুত্ব", text: "Quality teaching with more individual focus." },
  ],
  why: [
    "Special focus on building strong fundamentals",
    "Extra explanation for weak subjects",
    "Preparation for Board & competitive exams",
    "Rich study material and notes",
    "Regular parent communication & counselling",
  ],
};

// ─────────────────────────────────────────────────────────────
//  GALLERY (photos in /public/gallery/)
// ─────────────────────────────────────────────────────────────
export const gallery = [
  { src: "/gallery/self-study.jpg", w: 1400, h: 882, caption: "Supervised self-study session", size: "wide" },
  { src: "/gallery/class-room.jpg", w: 610, h: 1070, caption: "Daily classes in Moon's World uniform", size: "tall" },
  { src: "/gallery/class-teaching.jpg", w: 610, h: 745, caption: "Classroom teaching" },
  { src: "/gallery/felicitation.jpg", w: 1400, h: 630, caption: "Student felicitation programme" },
];

// Contest organizers, shown on /contests and in the home Contests section.
// Optional per person: photo: "/team/name.jpg", bio: "one line", phone: "+91 …"
export const contestOrganizers = [
  { name: "Mrinal Pal", role: "Contest Organizer" },
  { name: "Purba Ray", role: "Contest Organizer" },
];
