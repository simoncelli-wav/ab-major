const navigationItems = [
  { label: "Creative Space", href: "#creative-space", current: true },
  { label: "Projects", href: "#projects", current: false },
  { label: "About", href: "#about", current: false },
];

export function Navigation() {
  return (
    <header className="site-header">
      <p className="site-signature">Independent practice <span> / 2026</span></p>
      <nav aria-label="Main navigation" className="site-navigation">
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className="navigation-link"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}