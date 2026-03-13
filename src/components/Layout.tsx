import { Link, useLocation } from "react-router-dom";
import "./Layout.css";
import CustomCursor from "./CustomCursor";
import ScrollProgress from "./ScrollProgress";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="layout">
      <CustomCursor />
      <ScrollProgress />

      <header className="header">
        <div className="container">
          <nav className="nav">
            <Link to="/" className="logo">
              Teams but <span className="accent">(actually)</span> good
            </Link>
            <div className="nav-links">
              <Link to="/" className={isActive("/") ? "active" : ""}>
                Home
              </Link>
              <Link
                to="/download"
                className={isActive("/download") ? "active" : ""}
              >
                Download
              </Link>
              <Link
                to="/plugins"
                className={isActive("/plugins") ? "active" : ""}
              >
                Plugins
              </Link>
              <Link
                to="/themes"
                className={isActive("/themes") ? "active" : ""}
              >
                Themes
              </Link>
              <a
                href="https://github.com/LeonimusTTV/teams-but-actually-good"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                GitHub
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Teams but (actually) good</h4>
              <p>Teams, but without the suffering.</p>
            </div>
            <div className="footer-section">
              <h4>Links</h4>
              <div className="footer-links">
                <Link to="/download">Download</Link>
                <Link to="/plugins">Plugins</Link>
                <Link to="/themes">Themes</Link>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Community</h4>
              <div className="footer-links">
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © 2026 Teams but (actually) good. Not affiliated with or endorsed
              by Microsoft.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
