import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Navbar as RpNavbar, Flex, FlexTypes, ThemeToggler } from "rainbow-plus-ui/src";

const Navbar = () => {
  const [isMobileMenuOpen, toggle] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <RpNavbar>
        <RpNavbar.Brand as={Link} to="/">
          Rainbow UI
        </RpNavbar.Brand>
        <RpNavbar.Toggle toggle={toggle}>
          <FaBars />
        </RpNavbar.Toggle>
        <RpNavbar.Collapse isMobileMenuOpen={isMobileMenuOpen}>
          <RpNavbar.Link to="/components" activeColor="text-amber-200">
            Components
          </RpNavbar.Link>
          <RpNavbar.Link to="/Hooks" activeColor="text-amber-200">
            Hooks
          </RpNavbar.Link>
          <RpNavbar.Link to="/Helpers" activeColor="text-amber-200">
            Helpers
          </RpNavbar.Link>
          <RpNavbar.Link to="/Types" activeColor="text-amber-200">
            Types
          </RpNavbar.Link>
          <RpNavbar.Link to="/download" activeColor="text-amber-200">
            Download
          </RpNavbar.Link>
        </RpNavbar.Collapse>
        <RpNavbar.Brand>
          <Flex align={FlexTypes.Center} className="gap-4">
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
