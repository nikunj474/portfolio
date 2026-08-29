import { contact, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="rule-t">
      <div className="shell flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="meta">
          © {new Date().getFullYear()} {site.name} · {contact.note}
        </p>
        <p className="meta">
          Built with Next.js · <a className="link-underline" href="https://github.com/nikunj474/portfolio">Source</a>
        </p>
      </div>
    </footer>
  );
}
