import pluginsData from "./plugins.json";
import themesData from "./themes.json";
import type { Feature } from "./types";

export function getFeatures(): Feature[] {
  const pluginCount = pluginsData.length;
  const themeCount = themesData.length;

  return [
    {
      num: "01",
      title: "Cleaner UI",
      description:
        "Strips the clutter Microsoft glued onto Teams. Less noise, more work.",
      icon: "Paintbrush",
    },
    {
      num: "02",
      title: "Actually Fast",
      description:
        "Cuts the bloat that makes Teams crawl. Meetings load faster. You suffer less.",
      icon: "Zap",
    },
    {
      num: "03",
      title: `${pluginCount} Built-in Plugins`,
      description:
        "Pre-installed, opt-in. Enable what you need, ignore the rest. No marketplace, no accounts.",
      icon: "Puzzle",
    },
    {
      num: "04",
      title: `${themeCount} Themes`,
      description:
        "Dark, light, and everything in between. Switch instantly from the settings panel.",
      icon: "Palette",
    },
    {
      num: "05",
      title: "No Telemetry",
      description:
        "Microsoft already knows enough about you. We block what we can.",
      icon: "ShieldCheck",
    },
    {
      num: "06",
      title: "One Installer",
      description:
        "Download, run, done. No admin rights. Uninstall any time — Teams goes back to normal.",
      icon: "Download",
    },
  ];
}
