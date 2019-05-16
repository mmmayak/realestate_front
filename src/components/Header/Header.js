import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import logo from "../../assets/images/logo.png";
import "./Header.scss";

export default class Header extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <Navbar color="primary" dark expand="md">
        <div className="container">
          <NavbarBrand className="d-flex align-items-center" href="/">
            <div className="logo-container mr-2">
              <img src={logo} />
            </div>
            Petro Realty
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Listings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
