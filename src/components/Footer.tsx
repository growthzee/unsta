export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant py-16 flex flex-col items-center justify-center gap-8 w-full px-8">
      <div className="font-display text-2xl font-bold text-primary">UNSTA</div>
      <div className="flex space-x-8">
        {["Product", "Company", "Privacy", "Terms"].map((link, idx) => (
          <a
            key={idx}
            className="font-sans text-xs font-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="font-sans text-xs text-on-surface-variant">
        © 2026 UNSTA Group. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
