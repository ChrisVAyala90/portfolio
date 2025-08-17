import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export function Header() {
  return (
    <Navbar maxWidth="xl" className="bg-background/70 backdrop-blur-md">
      <NavbarBrand>
        <p className="font-bold text-inherit text-xl">Christopher Ayala</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#about" className="text-medium">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#resume" className="text-medium">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#case-studies" className="text-medium">
            Case Studies
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            as={Link} 
            color="primary" 
            href="mailto:chris.ayala12@gmail.com" 
            variant="flat"
            endContent={<Icon icon="lucide:mail" />}
          >
            Contact Me
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}