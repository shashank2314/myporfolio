

import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png"
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { Button } from "./Button2";
import { ModeToggle } from "./mode-toggle";
import { cn } from "../lib/utils";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [pathname, setPathName] = useState(location.pathname);
    useEffect(() => {
        setPathName(location.pathname);
    }, [location.pathname]);
    return (
        <nav className="fixed top-0 z-50 w-[99vw] border-b bg-background/95 backdrop-blur">
            <div className="w-full flex h-16 items-center justify-between px-4">
                <div className="hidden lg:flex space-x-6 text-sm font-medium">
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} className="w-12 h-12" alt="logo" />
                    <div className="font-bold text-xl">Shashank Kumar</div>
                </Link>
                </div>
                <div className="hidden md:flex space-x-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link key={item.path} to={item.path} className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname === item.path ? "text-foreground" : "text-foreground/60"
                        )}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center justify-between w-full md:w-auto space-x-2">
                    <Button asChild className="hidden md:flex">
                        <Link to="/resume.pdf" target="_blank">Resume</Link>
                    </Button>
                    <Button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </Button>
                    <ModeToggle />
                </div>
            </div>
            {isOpen && (
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden border-b bg-background">
                    <nav className="flex flex-col space-y-4 p-4">
                        {navItems.map((item) => (
                            <Link key={item.path} to={item.path} className={cn(
                                "text-sm transition-colors hover:text-foreground/80",
                                pathname === item.path ? "text-foreground" : "text-foreground/60"
                            )} onClick={() => setIsOpen(false)}>
                                {item.name}
                            </Link>
                        ))}
                        <Button asChild className="w-full">
                            <Link to="/resume.pdf" target="_blank">Resume</Link>
                        </Button>
                    </nav>
                </motion.div>
            )}
        </nav>
    );
}
