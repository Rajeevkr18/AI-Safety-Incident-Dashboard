import ReportForm from "../components/ReportForm";

function ReportIncident({ onAddIncident }) {
  return (
    <div className="page">
      <h2>Report a New Incident</h2>
      <ReportForm onAddIncident={onAddIncident} />
    </div>
  );
}

export default ReportIncident;
