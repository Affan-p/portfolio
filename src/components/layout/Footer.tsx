import { SOCIAL_LINKS } from "@/config/site";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-surface/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-muted">
          AFFAN PARKAR &copy; {new Date().getFullYear()}
        </span>
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-[11px] font-medium uppercase tracking-widest text-muted transition-colors duration-200 hover:text-primary"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
