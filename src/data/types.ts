export interface Plugin {
  name: string;
  description: string;
  icon: string;
  category: string;
  enabled: boolean;
}

export interface Theme {
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    textMuted: string;
    border: string;
  };
  isLight?: boolean;
}

export interface Feature {
  num: string;
  title: string;
  description: string;
  icon: string;
}

export interface Platform {
  icon: string;
  name: string;
  requirement: string;
  label: string;
  extension: string;
}
