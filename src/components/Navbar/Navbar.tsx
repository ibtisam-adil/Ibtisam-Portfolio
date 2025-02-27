import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">

<ul className="navbar-list flex items-center flex-wrap justify-center gap-2">

  <li className="navbar-item">
    <NavLink to="/about" className="navbar-link">About</NavLink>
  </li>

  <li className="navbar-item">
    <NavLink to="/resume" className="navbar-link" data-nav-link>Resume</NavLink>
  </li>

  <li className="navbar-item">
    <NavLink to="/portfolio" className="navbar-link">Portfolio</NavLink>
  </li>

  <li className="navbar-item">
    <NavLink to="/contact" className="navbar-link">Contact</NavLink>
  </li>

</ul>

</nav>
  )
}

export default Navbar
