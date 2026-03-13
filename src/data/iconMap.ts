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
  Paintbrush,
  Puzzle,
  Palette,
  Download,
  Monitor,
  Apple,
  Terminal,
  Chrome,
  Flame,
  Compass,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bell,
  Zap,
  FileText,
  Video,
  BarChart2,
  Keyboard,
  Folder,
  ShieldCheck,
  MessageSquare,
  Paintbrush,
  Puzzle,
  Palette,
  Download,
  Monitor,
  Apple,
  Terminal,
  Chrome,
  Flame,
  Compass,
};

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Zap; // fallback to Zap if icon not found
}
