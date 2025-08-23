import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "../contexts/theme-context";

export function Header() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <Navbar maxWidth="xl" className="bg-background/70 backdrop-blur-md">
      <NavbarBrand>
        <p className="font-bold text-inherit text-xl">Christopher Ayala</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#about" className="text-medium hover:scale-105 transition-transform duration-200">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#resume" className="text-medium hover:scale-105 transition-transform duration-200">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#technical-projects" className="text-medium hover:scale-105 transition-transform duration-200">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onPress={toggleTheme}
            aria-label="Toggle dark mode"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Icon 
              icon={isDark ? "lucide:sun" : "lucide:moon"} 
              className="w-5 h-5" 
            />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}