import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image } from "@nextui-org/react";
import '../globals.css';
export default function App() {
  return (
    <Navbar 
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      style={{ backgroundColor: '#433bff' }}
    >
      <NavbarBrand>
        <Image src='/logo.png' alt="Therapute" height='200px' width='200px'/>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="custom-link" href="/"> {/* Add custom class */}
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="custom-link" href="/exercise"> {/* Add custom class */}
            Exercise
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="custom-link" href="analysis"> {/* Add custom class */}
            Analysis
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="custom-link" href="connect"> {/* Add custom class */}
            Connect
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="custom-link" href="profile"> {/* Add custom class */}
            Profile
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
