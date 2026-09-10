function EmployeeBio({
  name,
  bio = "Bio not available",
  experience = "Experience not specified",
}) {
  return (
    <section className="employee-bio">
      <h3>About {name}</h3>
      <p>{bio}</p>
      <p>{experience}</p>
    </section>
  );
}

export default EmployeeBio;