import {
  Bell,
  Zap,
  FileText,
  Video,
  BarChart2,
  Keyboard,
  Folder,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./Plugins.css";

interface Plugin {
  name: string;
  description: string;
  Icon: LucideIcon;
  category: string;
  enabled: boolean;
}

const plugins: Plugin[] = [
  {
    name: "Better Notifications",
    description:
      "Custom sounds, filtering, and priority settings. Fewer interruptions.",
    Icon: Bell,
    category: "Productivity",
    enabled: true,
  },
  {
    name: "Quick Reactions",
    description:
      "Customizable reaction menu. React to messages without navigating three submenus.",
    Icon: Zap,
    category: "Communication",
    enabled: true,
  },
  {
    name: "Message Formatting",
    description:
      "Markdown support and custom text styles. Teams' default editor is bad. This fixes it.",
    Icon: FileText,
    category: "Communication",
    enabled: true,
  },
  {
    name: "Meeting Enhancer",
    description:
      "Auto-recording, better blur, custom layouts. Makes calls less painful.",
    Icon: Video,
    category: "Meetings",
    enabled: false,
  },
  {
    name: "Performance Monitor",
    description:
      "See what Teams is doing to your CPU in real time. Useful. Slightly horrifying.",
    Icon: BarChart2,
    category: "Utility",
    enabled: false,
  },
  {
    name: "Keyboard Shortcuts",
    description:
      "Dozens of extra shortcuts. If you like your mouse, this plugin will change that.",
    Icon: Keyboard,
    category: "Productivity",
    enabled: true,
  },
  {
    name: "File Manager",
    description:
      "Search and organize shared files without clicking through six tabs.",
    Icon: Folder,
    category: "Productivity",
    enabled: false,
  },
  {
    name: "Privacy Guard",
    description:
      "Blocks telemetry and tightens data controls. Microsoft won't be thrilled.",
    Icon: ShieldCheck,
    category: "Privacy",
    enabled: true,
  },
  {
    name: "Status Customizer",
    description:
      "Custom status messages and calendar-based auto-switching. Look busy when you're not.",
    Icon: MessageSquare,
    category: "Communication",
    enabled: false,
  },
];

const enabledCount = plugins.filter((p) => p.enabled).length;
const optionalCount = plugins.filter((p) => !p.enabled).length;

export default function Plugins() {
  return (
    <div className="plugins-page">
      {/* Hero */}
      <section className="pl-hero">
        <div className="pl-hero-glow" />
        <div className="container">
          <span className="pl-label">Plugins</span>
          <h1 className="pl-title">
            {plugins.length} things
            <br />
            <em>we fixed.</em>
          </h1>
          <p className="pl-sub">
            All pre-installed. Toggle each one from the settings panel. No
            restarts.
          </p>
          <div className="pl-meta">
            <span className="pl-meta-item">
              <span className="pl-meta-dot pl-meta-dot--on" />
              {enabledCount} on by default
            </span>
            <span className="pl-meta-sep" />
            <span className="pl-meta-item">
              <span className="pl-meta-dot" />
              {optionalCount} optional
            </span>
            <span className="pl-meta-sep" />
            <span className="pl-meta-item">0 accounts needed</span>
          </div>
        </div>
      </section>

      {/* Plugin list */}
      <section className="pl-list-section">
        <div className="container">
          <div className="pl-list">
            <div className="pl-list-header">
              <span className="plh-num">#</span>
              <span className="plh-name">Plugin</span>
              <span className="plh-cat">Category</span>
              <span className="plh-status">Default</span>
            </div>
            {plugins.map((plugin, i) => (
              <div
                key={plugin.name}
                className={`pl-row${plugin.enabled ? " pl-row--on" : ""}`}
              >
                <span className="pl-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="pl-info">
                  <div className="pl-name-row">
                    <plugin.Icon className="pl-icon" strokeWidth={1.5} />
                    <span className="pl-name">{plugin.name}</span>
                  </div>
                  <p className="pl-desc">{plugin.description}</p>
                </div>
                <span className="pl-cat">{plugin.category}</span>
                <span
                  className={`pl-toggle${plugin.enabled ? " pl-toggle--on" : ""}`}
                >
                  {plugin.enabled ? "On" : "Off"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info grid */}
      <section className="pl-info-section">
        <div className="container">
          <div className="pl-info-grid">
            <div className="pl-info-card">
              <span className="pl-info-num">01</span>
              <h3>Toggle from settings</h3>
              <p>
                Open the settings panel after installing. Enable or disable any
                plugin with one click. No restart. No drama.
              </p>
            </div>
            <div className="pl-info-card">
              <span className="pl-info-num">02</span>
              <h3>Each plugin is independent</h3>
              <p>
                Nothing is coupled. Turn off what you don't want. The rest keeps
                working exactly as expected.
              </p>
            </div>
            <div className="pl-info-card">
              <span className="pl-info-num">03</span>
              <h3>More coming</h3>
              <p>
                A plugin API is in the works. Write your own, share it with the
                community. Not ready yet — but it's coming.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
