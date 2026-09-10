const departments = [
  "Engineering",
  "Sales",
  "Human Resources",
  "Marketing",
  "Finance",
];

function DepartmentList() {
  return (
    <ul>
      {departments.map((department) => (
        <li key={department}>{department}</li>
      ))}
    </ul>
  );
}

export default DepartmentList;