import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Download from "./pages/Download";
import Plugins from "./pages/Plugins";
import Themes from "./pages/Themes";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/plugins" element={<Plugins />} />
        <Route path="/themes" element={<Themes />} />
      </Routes>
    </Layout>
  );
}

export default App;
