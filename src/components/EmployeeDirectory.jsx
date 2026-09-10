import EmployeeCard from "./EmployeeCard";

function EmployeeDirectory({ employees }) {
  return (
    <section className="directory">
      <div className="directory-heading">
        <div>
          <h2>Our Team</h2>
          <p>Showing {employees.length} employees</p>
        </div>
      </div>

      <div className="employee-grid">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            role={employee.role}
            department={employee.department}
            email={employee.email}
            location={employee.location}
            status={employee.status}
            avatar={employee.avatar}
          />
        ))}
      </div>
    </section>
  );
}

export default EmployeeDirectory;