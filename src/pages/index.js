import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Home from "./Home";
import './index.css';

function PageRoutes() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ width: '100%' }}>
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Account" element={<Account />} />
          <Route path="Home" element={<Home />} />
          <Route path="Problems" element={<div><h1>Problems</h1> <hr /></div>} />
          <Route path="Problems/:problemId" element={<div style={{ width: '100%' }}><h1>Problems</h1> <hr style={{ width: '100%' }} /></div>} />
        </Routes>
      </div>
    </div>
  );
}
export default PageRoutes;
