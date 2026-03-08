import "./Plugins.css";
import pluginsData from "../data/plugins.json";
import { getIcon } from "../data/iconMap";
import PageHero from "../components/PageHero";
import InfoGrid from "../components/InfoGrid";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";

const plugins = pluginsData;
const enabledCount = plugins.filter((p) => p.enabled).length;
const optionalCount = plugins.filter((p) => !p.enabled).length;

const infoCards = [
  {
    num: "01",
    title: "Toggle from settings",
    body: "Open the settings panel after installing. Enable or disable any plugin with one click. No restart. No drama.",
  },
  {
    num: "02",
    title: "Each plugin is independent",
    body: "Nothing is coupled. Turn off what you don't want. The rest keeps working exactly as expected.",
  },
  {
    num: "03",
    title: "More coming",
    body: "A plugin API is in the works. Write your own, share it with the community. Not ready yet — but it's coming.",
  },
];


export default function Plugins() {
  return (
    <PageTransition>
      <div className="plugins-page">
        <PageHero
          label="Plugins"
          title={
            <>
              {plugins.length} things
              <br />
              <em>we fixed.</em>
            </>
          }
          subtitle="All pre-installed. Toggle each one from the settings panel. No restarts."
          glowSide="left"
        >
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
        </PageHero>

        {/* Plugin list */}
        <section className="pl-list-section">
          <div className="container">
            <div className="pl-list">
              <Reveal>
                <div className="pl-list-header">
                  <span className="plh-num">#</span>
                  <span className="plh-name">Plugin</span>
                  <span className="plh-cat">Category</span>
                  <span className="plh-status">Default</span>
                </div>
              </Reveal>
              {plugins.map((plugin, i) => {
                const Icon = getIcon(plugin.icon);
                return (
                  <Reveal
                    key={plugin.name}
                    className={`pl-row${plugin.enabled ? " pl-row--on" : ""}`}
                    delay={i * 0.035}
                    x={-16}
                    y={0}
                  >
                    <span className="pl-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="pl-info">
                      <div className="pl-name-row">
                        <Icon className="pl-icon" strokeWidth={1.5} />
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
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Info grid */}
        <section className="info-section">
          <div className="container">
            <Reveal delay={0.1}>
              <InfoGrid cards={infoCards} cols={3} />
            </Reveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
