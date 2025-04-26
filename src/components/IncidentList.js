import IncidentCard from "./IncidentCard";
import './IncidentList.css';
import { useState } from "react"; // Import useState

function IncidentList({ incidents }) {
  const [severityFilter, setSeverityFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const filteredIncidents = incidents
    .filter(incident => severityFilter === "All" || incident.severity === severityFilter)
    .sort((a, b) => {
      if (sortOrder === "Newest") {
        return new Date(b.reported_at) - new Date(a.reported_at);
      } else {
        return new Date(a.reported_at) - new Date(b.reported_at);
      }
    });

  return (
    <div>
      <div className="filters">
        <select onChange={(e) => setSeverityFilter(e.target.value)} value={severityFilter}>
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>

      <div className="incident-list">
        {filteredIncidents.map((incident) => (
          <IncidentCard key={incident.id} incident={incident} />
        ))}
      </div>
    </div>
  );
}

export default IncidentList;
