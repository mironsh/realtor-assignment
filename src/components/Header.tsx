import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import { Navbar, NavbarBrand, NavLink } from "reactstrap"
import { Profile, Site } from "../types/data"

type HeaderProps = { site: Site; profile: Profile }
const header: FunctionComponent<HeaderProps> = ({ site, profile }) => {
  return (
    <div id="header">
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/" className={"home"} >
          <img src={site.logoImage} alt={"logo"} />
        </NavbarBrand>
        <h1 className="title">{site.title}</h1>
        <NavLink tag={Link} to="/profile" className={"profile"}>{`Welcome ${profile.firstName}`}</NavLink>
      </Navbar>
    </div>
  )
}

export default header
