import { Fragment } from "react";
import { emojiFiles } from "@/data/emoji";

const strip = (e) => e.replace(/️/g, "");
const keys = Object.keys(emojiFiles).sort((a, b) => b.length - a.length);
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const RE = new RegExp(`(${keys.map((k) => esc(k) + "\\uFE0F?").join("|")})`, "gu");

// One emoji → realistic 3D image (or the plain emoji if we have no image for it).
export function Emoji({ e, size = "1.25em", className = "", label }) {
  const file = e ? emojiFiles[strip(e)] : null;
  if (!file) return e ? <span className={className}>{e}</span> : null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`/emoji/${file}`} alt={label || ""} aria-hidden={label ? undefined : true}
      className={`emoji ${className}`} style={{ width: size, height: size }} loading="lazy" decoding="async" draggable="false" />
  );
}

// Text that may contain emojis → same text with each emoji drawn as a 3D image.
export function EmojiText({ children, size }) {
  if (typeof children !== "string") return children ?? null;
  const parts = children.split(RE);
  if (parts.length === 1) return children;
  return parts.map((p, i) => (i % 2 ? <Emoji key={i} e={p} size={size} /> : <Fragment key={i}>{p}</Fragment>));
}

export default Emoji;
