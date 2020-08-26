import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
    <div className="{headerStyles.overlay}"></div>
    <div className={headerStyles.heroContent}>
     
    </div>
    <nav className={headerStyles.navContainer}>
     <ul className={headerStyles.navList}>
  <li>
    <Link to="/" activeClassName={headerStyles.activeMenuItem}>
      Home
    </Link>
  </li>
  <li>
    <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>
      About
    </Link>
  </li>
  <li>
    <Link to="/mission/" activeClassName={headerStyles.activeMenuItem}>
      Mission and Vision
    </Link>
  </li>
  <li>
    <Link to="/clients/" activeClassName={headerStyles.activeMenuItem}>
      Clients
    </Link>
  </li>
  <li>
    <Link to="/contact/" activeClassName={headerStyles.activeMenuItem}>
      Contact
    </Link>
  </li>

</ul>
    </nav>
  </header>
  )
}

export default Header