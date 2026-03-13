export const loadDownloadPage = () => import("../pages/Download");
export const loadPluginsPage = () => import("../pages/Plugins");
export const loadThemesPage = () => import("../pages/Themes");

export function preloadRoute(path: string): void {
  switch (path) {
    case "/download":
      void loadDownloadPage();
      break;
    case "/plugins":
      void loadPluginsPage();
      break;
    case "/themes":
      void loadThemesPage();
      break;
    default:
      break;
  }
}

export function preloadSecondaryRoutes(): Promise<
  PromiseSettledResult<unknown>[]
> {
  return Promise.allSettled([
    loadDownloadPage(),
    loadPluginsPage(),
    loadThemesPage(),
  ]);
}
