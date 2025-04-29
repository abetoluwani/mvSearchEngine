import { Link } from "react-router-dom";

function NavBar() {
  return (
      <nav className="navbar">
          <div className="nav-brand">
              <Link to='/'> Movie Search Engine</Link>
          </div>
          <div className="navbar-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favourite">Favourites</Link>
                    </li>
                </ul>       
          </div>
    </nav>
  );
}
export default NavBar;