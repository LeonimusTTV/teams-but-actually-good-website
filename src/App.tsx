import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Download = lazy(() => import("./pages/Download"));
const Plugins = lazy(() => import("./pages/Plugins"));
const Themes = lazy(() => import("./pages/Themes"));

function RouteFallback() {
  return <div className="route-loading" aria-hidden="true" />;
}

function App() {
  const location = useLocation();

  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
            <Route path="/plugins" element={<Plugins />} />
            <Route path="/themes" element={<Themes />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  );
}

export default App;
