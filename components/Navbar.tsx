import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image } from "@nextui-org/react";

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
      style={{ backgroundColor: '#433bff', display: 'flex', justifyContent: 'space-around' }}
    >
      <NavbarBrand style={{}}>
        <Image src='/mainLogo.png' alt="Therapute" height='250px' width='250px' className="ml-5"/>
      </NavbarBrand>
      <NavbarContent className=" gap-10" style={{}}> {/* Use ml-auto to push content to the right */}
        <NavbarItem>
          <Link underline="hover" color="foreground" href="/home" className="text-white mr-1">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link underline="hover" color="foreground" href="/exercise" className="text-white mr-1">
            Exercise
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link underline="hover" color="foreground" href="analysis" className="text-white mr-1">
            Analysis
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link underline="hover" color="foreground" href="profile" className="text-white">
            Profile
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
