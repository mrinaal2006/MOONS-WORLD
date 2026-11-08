import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section"><div className="container center">
      <h1 className="hl">404</h1><p className="muted">This page doesn&apos;t exist.</p>
      <Link href="/" className="btn btn-primary">Go home</Link>
    </div></section>
  );
}
