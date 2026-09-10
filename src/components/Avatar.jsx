function Avatar({ initials, name }) {
  return (
    <div className="avatar" aria-label={`Avatar for ${name}`} title={name}>
      {initials}
    </div>
  );
}

export default Avatar;