// Pop-up ad shown when someone opens the website (once per visit/session).
// To advertise something else, change these values. Set `enabled: false` to turn it off.
// It stops showing automatically after `showUntil` (end of that day, India time).
export const promo = {
  enabled: true,
  id: "hackathon-2026-postponed", // change when you advertise something new, so visitors see it again
  showUntil: "2026-12-31", // update once the new date is fixed
  delayMs: 900,
  badge: "Postponed • New date soon",
  title: "HACKATHON 2026",
  subtitle: "Innovate | Collaborate | Code | Create Impact",
  points: [
    "📅 Postponed to mid-December 2026. Exact date will be announced shortly. Stay tuned!",
    "📍 Anovatech Institute, Durgapur",
    "🏆 Cash prizes: ₹6,000 · ₹2,000 · ₹1,000 · ₹600",
    "⚡ Limited seats: maximum 30 teams",
  ],
  image: "/contests/hackathon-2026-poster-v3.jpg",
  imageWidth: 1200,
  imageHeight: 1697,
  primary: {
    label: "Register now",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdkvvDyJU1cJGlbeAsRwkylivYxakY527OdOAmx620mriiruw/viewform?usp=dialog",
    external: true,
  },
  secondary: { label: "View details", href: "/contests/hackathons" },
};
