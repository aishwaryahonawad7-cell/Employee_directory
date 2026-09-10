function DepartmentBadge(props) {
  const { department } = props;

  return <span className="department-badge">{department}</span>;
}

export default DepartmentBadge;