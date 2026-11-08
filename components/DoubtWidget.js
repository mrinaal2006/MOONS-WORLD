"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

// Quick questions shown as chips; tapping one fills the message box.
const QUICK = [
  "Class XI admission & fees",
  "Hostel & food facility",
  "Online UG / PG courses",
  "Contests & scholarship tests",
];

const AUTO_OPEN_MS = 2500; // pop up this long after the website opens

function HeadsetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
      <path d="M21 15a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3z" />
      <path d="M3 15a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H3z" />
      <path d="M19 17v1a3 3 0 0 1-3 3h-3" />
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z" />
    </svg>
  );
}

export default function DoubtWidget() {
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);   // hides the red "1" dot
  const [typing, setTyping] = useState(false);
  const [msg, setMsg] = useState("");
  const userClosed = useRef(false);
  const inputRef = useRef(null);

  const show = () => {
    setOpen(true);
    setSeen(true);
    setTyping(true);
    setTimeout(() => setTyping(false), 1100);
  };

  // Pop up automatically every time the website is opened
  useEffect(() => {
    const t = setTimeout(() => { if (!userClosed.current) show(); }, AUTO_OPEN_MS);
    return () => clearTimeout(t);
  }, []);

  // Esc closes
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    userClosed.current = true;
    setOpen(false);
  }

  function send(e) {
    e.preventDefault();
    const text = `Hello ${site.name}, I have a doubt:\n${msg.trim() || "Please call me back."}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <div className={`doubt ${open ? "is-open" : ""}`}>
      <div className="doubt-panel" role="dialog" aria-modal="false" aria-labelledby="doubt-title" aria-hidden={!open}>
        <header className="doubt-head">
          <span className="doubt-avatar"><HeadsetIcon /></span>
          <div>
            <strong id="doubt-title">Have a doubt?</strong>
            <span className="doubt-status"><i /> Moon&apos;s World team · replies on WhatsApp</span>
          </div>
          <button type="button" className="doubt-x" aria-label="Close" onClick={close} tabIndex={open ? 0 : -1}>✕</button>
        </header>

        <div className="doubt-body">
          {typing ? (
            <div className="bubble typing" aria-label="typing"><span /><span /><span /></div>
          ) : (
            <div className="bubble">
              👋 Hi! Ask us anything about <b>admission, fees, hostel, online courses</b> or <b>contests</b>. We&apos;ll reply on WhatsApp.
            </div>
          )}
          <div className="doubt-chips">
            {QUICK.map((q) => (
              <button key={q} type="button" className={msg === q ? "on" : ""} tabIndex={open ? 0 : -1}
                onClick={() => { setMsg(q); inputRef.current?.focus(); }}>
                {q}
              </button>
            ))}
          </div>
        </div>

        <form className="doubt-form" onSubmit={send}>
          <textarea ref={inputRef} rows={2} value={msg} onChange={(e) => setMsg(e.target.value)}
            placeholder="Type your doubt here…" aria-label="Your doubt" tabIndex={open ? 0 : -1} />
          <button type="submit" className="doubt-send" tabIndex={open ? 0 : -1}>
            <WhatsAppIcon /> Chat on WhatsApp
          </button>
          <a className="doubt-call" href={`tel:${site.phone.replace(/\s/g, "")}`} tabIndex={open ? 0 : -1}>or call {site.phone}</a>
        </form>
      </div>

      <button type="button" className="doubt-fab" aria-label={open ? "Close doubt chat" : "Have a doubt? Chat with us"}
        aria-expanded={open} onClick={() => (open ? close() : show())}>
        <span className="fab-ring" aria-hidden="true" />
        <span className="fab-icon">{open ? "✕" : <HeadsetIcon />}</span>
        {!seen && <span className="fab-dot" aria-hidden="true">1</span>}
        {!open && <span className="fab-label" aria-hidden="true">Any doubt? Ask us</span>}
      </button>
    </div>
  );
}
