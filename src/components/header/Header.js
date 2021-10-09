const Header = () => {
  return (
    <header>
      <nav className="navbar-container">
        <div className="icon-container">
          <span>Icon</span>
        </div>
        <div className="options-container">
          <a href="/">Home</a>
          <a href="/">Sign In</a>
        </div>
      </nav>
      <h1>aiSee</h1>
      <p>
        A Color Detection App which shows you the hex code, the density and the
        closest color name of each identified color in an image
      </p>
    </header>
  );
};

export default Header;
