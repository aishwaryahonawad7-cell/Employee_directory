function Header({ title, subtitle }) {
  return (
    <header className="header">
      <div className="container"> 
        <p>Technova Solutions</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;