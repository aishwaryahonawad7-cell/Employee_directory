import Avatar from "./Avatar";
import StatusBadge from "./StatusBadge";
import InfoRow from "./InfoRow";

function EmployeeCard({
  name,
  role,
  department,
  email,
  location,
  status,
  avatar,
}) {
  return (
    <article className="employee-card">
      <div className="employee-header">
        <Avatar initials={avatar} name={name} />
        <div>
          <h2>{name}</h2>
          <p className="employee-role">{role}</p>
        </div>
      </div>

      <InfoRow label="Department" value={department} />
      <InfoRow label="Email" value={email} />
      <InfoRow label="Location" value={location} />
      <InfoRow label="Status">
        <StatusBadge status={status} />
      </InfoRow>
      <InfoRow label="Employee ID" value={String(name).replace(/\s+/g, "-").toLowerCase()} />
    </article>
  );
}

export default EmployeeCard;