import IncidentList from "../components/IncidentList";
import './Dashboard.css';

function Dashboard({ incidents }) {
  return (
    <div className="page">
      <h2>Incident Dashboard</h2>
      <IncidentList incidents={incidents} /> {/* Pass incidents to IncidentList */}
    </div>
  );
}

export default Dashboard;
