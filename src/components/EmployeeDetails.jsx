function EmployeeDetails({ employee }) {
  const { name, department } = employee;

  return (
    <p>
      {name} works in {department}.
    </p>
  );
}

export default EmployeeDetails;