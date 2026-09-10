function StatusBadge({ status }) {
  if (status === "Active") {
    return <span className="status status-active">Active</span>;
  }

  if (status === "On Leave") {
    return <span className="status status-leave">On Leave</span>;
  }

  return <span className="status status-inactive">Inactive</span>;
}

export default StatusBadge;