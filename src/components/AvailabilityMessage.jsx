function AvailabilityMessage({ status }) {
  if (status === "Active") {
    return <p>Employee is available.</p>;
  }

  if (status === "On Leave") {
    return <p>Employee is currently on leave.</p>;
  }

  return <p>Employee is unavailable.</p>;
}

export default AvailabilityMessage;