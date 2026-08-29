import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[60vh] flex-col justify-center py-24">
      <p className="meta mb-6 flex items-center gap-3">
        <span className="dot" />
        Error 404
      </p>
      <h1 className="font-serif text-display-sm text-charcoal">
        Nothing lives <span className="italic">here.</span>
      </h1>
      <p className="mt-5 max-w-prose font-sans text-[0.95rem] leading-relaxed text-charcoal-soft">
        The page you asked for does not exist. Everything on this site is reachable from the index.
      </p>
      <Link
        href="/"
        className="mt-9 inline-block w-fit border border-charcoal px-5 py-2.5 font-mono text-meta uppercase text-charcoal transition-colors duration-200 ease-editorial hover:bg-charcoal hover:text-cream"
      >
        Back to the index
      </Link>
    </div>
  );
}
