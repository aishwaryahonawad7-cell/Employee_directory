function EmployeeMessage({ name, status }) {
  if (status === "Active") {
    return <p>Welcome back, {name}!</p>;
  }

  if (status === "On Leave") {
    return <p>{name} is currently on leave.</p>;
  }

  return <p>{name} is currently inactive.</p>;
}

export default EmployeeMessage;