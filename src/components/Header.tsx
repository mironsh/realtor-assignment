import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import { Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap"
import { Profile, Site } from "../types/data"

type HeaderProps = { site: Site; profile: Profile }
const Header: FunctionComponent<HeaderProps> = ({ site, profile }) => {
  return (
    <div id="header">
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">
          <img src={site.logoImage} className={"home"} alt={"logo"} />
        </NavbarBrand>
        <h1 className="title">{site.title}</h1>
        <NavLink tag={Link} to="/profile">{`${profile.firstName} ${profile.lastName}`}</NavLink>
      </Navbar>
    </div>
  )
}

export default Header
