import PageRoutes from "./pages";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/pages" />} />
          <Route path="/pages/*" element={<PageRoutes />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
