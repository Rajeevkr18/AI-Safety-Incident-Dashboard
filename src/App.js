import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ReportIncident from "./pages/ReportIncident";
import { incidents as mockData } from "./data/incidents"; // import mockData
import Navbar from "./components/Navbar";

function App() {
  const [incidentList, setIncidentList] = useState(mockData);

  const handleAddIncident = (newIncident) => {
    setIncidentList(prev => [newIncident, ...prev]);
    alert("Incident reported successfully!");
  };

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard incidents={incidentList} />} />
        <Route path="/report" element={<ReportIncident onAddIncident={handleAddIncident} />} />
      </Routes>
    </div>
  );
}

export default App;
