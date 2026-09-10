function InfoRow({ label, value, children }) {
  return (
    <p className="info-row">
      <strong>{label}:</strong> {value || children}
    </p>
  );
}

export default InfoRow;