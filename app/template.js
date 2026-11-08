// Re-mounts on every route change → smooth fade/slide-in between pages.
export default function Template({ children }) {
  return <div className="page-transition">{children}</div>;
}
