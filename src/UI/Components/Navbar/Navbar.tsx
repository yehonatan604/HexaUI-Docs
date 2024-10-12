import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Navbar as RpNavbar, Flex, ThemeToggler } from "react-hexa-dev";
import { FlexTypes } from "react-hexa-dev";
import logo from "../../../Assets/Images/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, toggle] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <RpNavbar options={{ bgVariant: "black-d" }}>
        <RpNavbar.Brand as={Link} to="/">
          <Flex options={{ align: FlexTypes.Center }} className="gap-4">
            Hexa UI
            <img
              src={logo}
              alt="Hexa UI Logo"
              className="object-cover size-10 rounded-full"
            />
          </Flex>
        </RpNavbar.Brand>
        <RpNavbar.Toggle toggle={toggle}>
          <FaBars />
        </RpNavbar.Toggle>
        <RpNavbar.Collapse isMobileMenuOpen={isMobileMenuOpen}>
          <RpNavbar.Link to="/components">Components</RpNavbar.Link>
          <RpNavbar.Link to="/Hooks">Hooks</RpNavbar.Link>
          <RpNavbar.Link to="/Helpers">Helpers</RpNavbar.Link>
          <RpNavbar.Link to="/Types">Types</RpNavbar.Link>
          <RpNavbar.Link to="/themes">Themes</RpNavbar.Link>
        </RpNavbar.Collapse>
        <RpNavbar.Brand>
          <Flex options={{ align: FlexTypes.Center }} className="gap-4">
            <ThemeToggler
              darkIcon={<MdOutlineDarkMode />}
              lightIcon={<MdOutlineLightMode />}
            />
            <BiUserCircle size={30} />
          </Flex>
        </RpNavbar.Brand>
      </RpNavbar>
    </header>
  );
};

export default Navbar;
