import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/pages/Dashboard";
import AirtelTigo from "./components/pages/AirtleTigo";
import Telecel from "./components/pages/Telecel";
import Wallet from "./components/pages/Wallet";
import Orders from "./components/pages/Oders";
import MTN from "./components/pages/MTN";
import AFA from "./components/pages/Afa";
import Support from "./components/pages/Support";
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
            <Route path="mtn-data" element={<MTN />} />
            <Route path="airtel-tigo" element={<AirtelTigo />} />
            <Route path="telecel" element={<Telecel />} />
            <Route path="orders" element={<Orders />} />
            <Route path="wallet" element={<Wallet />} />
            {/* <Route path="/community" element={<Community />} /> */}
            <Route path="mtn-afa" element={<AFA />} />
            <Route path="support" element={<Support />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
