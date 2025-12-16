import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/pages/Dashboard";
import Feed from "./components/pages/Feed";
import Events from "./components/pages/Events";
import Wallet from "./components/pages/Wallet";
import FarmAccounts from "./components/pages/FarmAccounts";
import Stats from "./components/pages/Stats";
import AFA from "./components/pages/Afa";
import Support from "./components/pages/Support";
import Debtors from "./components/pages/Debtors";
import "./index.css";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 bg-light flex-1 overflow-auto">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="Stats" element={<Stats />} />
            <Route path="Feed" element={<Feed />} />
            <Route path="Events" element={<Events />} />
            <Route path="FarmAccounts" element={<FarmAccounts />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="Debtors" element={<Debtors />} />
            <Route path="mtn-afa" element={<AFA />} />
            <Route path="support" element={<Support />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
