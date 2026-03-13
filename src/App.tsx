import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import {
  loadDownloadPage,
  loadPluginsPage,
  loadThemesPage,
  preloadSecondaryRoutes,
} from "./routes/routeModules";

const Download = lazy(loadDownloadPage);
const Plugins = lazy(loadPluginsPage);
const Themes = lazy(loadThemesPage);

function RouteFallback() {
  return (
    <div className="route-loading" role="status" aria-live="polite">
      <div className="route-loading__pulse" aria-hidden="true" />
      <span className="route-loading__text">Loading page…</span>
    </div>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const browserWindow = window as Window & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let timeoutId: number | undefined;
    let idleId: number | undefined;

    const preload = () => {
      void preloadSecondaryRoutes();
    };

    if (browserWindow.requestIdleCallback) {
      idleId = browserWindow.requestIdleCallback(preload, { timeout: 1500 });
    } else {
      timeoutId = window.setTimeout(preload, 250);
    }

    return () => {
      if (idleId !== undefined && browserWindow.cancelIdleCallback) {
        browserWindow.cancelIdleCallback(idleId);
      }

      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <Layout>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo({ top: 0, left: 0 })}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route
            path="/download"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Download />
              </Suspense>
            }
          />
          <Route
            path="/plugins"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Plugins />
              </Suspense>
            }
          />
          <Route
            path="/themes"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Themes />
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
