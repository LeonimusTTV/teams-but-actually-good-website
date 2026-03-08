import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Download from "./pages/Download";
import Plugins from "./pages/Plugins";
import Themes from "./pages/Themes";

function App() {
  const location = useLocation();

  return (
    <Layout>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/plugins" element={<Plugins />} />
          <Route path="/themes" element={<Themes />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
