import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function SunIcon() {
  return (
    <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4L5.3 5.3" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.3 14.7A8.5 8.5 0 0 1 9.3 4.7 8.5 8.5 0 1 0 19.3 14.7Z" />
    </svg>
  );
}

export function SiteLayout() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      return stored;
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand">
            NewGame++
          </Link>
          <nav className="main-nav">
            <NavLink to="/" end>
              Reviews
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              aria-label="Toggle dark mode"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>Copyright 2026 NewGame++. All rights reserved.</p>
      </footer>
    </div>
  );
}
