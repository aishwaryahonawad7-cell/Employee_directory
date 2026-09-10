function UserProfile({ name, email, city }) {
  return (
    <section>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{city}</p>
    </section>
  );
}

export default UserProfile;