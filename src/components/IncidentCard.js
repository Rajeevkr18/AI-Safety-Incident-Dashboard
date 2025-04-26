import { motion } from "framer-motion";
import { useState } from "react";
import './IncidentCard.css';

function IncidentCard({ incident }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      className="incident-card"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{incident.title}</h3>
      <p><strong>Severity:</strong> {incident.severity}</p>
      <p><strong>Reported At:</strong> {new Date(incident.reported_at).toLocaleDateString()}</p>

      {showDetails && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="description"
        >
          {incident.description}
        </motion.p>
      )}

      <button onClick={() => setShowDetails(prev => !prev)} className="view-details-btn">
        {showDetails ? "Hide Details" : "View Details"}
      </button>
    </motion.div>
  );
}

export default IncidentCard;
