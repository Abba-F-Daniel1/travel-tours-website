import Logo from "../../../public/images/logodesign.png";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${
      scrolled
        ? "bg-primary-light/70 backdrop-blur-md shadow-lg"
        : "bg-transparent"
    }`;

  const textColor = "text-primary-dark";

  return (
    <>
      <header className={headerClasses}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className={`flex items-center space-x-2 ${textColor} hover:text-accent transition-colors duration-300`}
          >
            <motion.img
              src={Logo}
              alt="WanderSphere Logo"
              className="w-10 h-10 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="font-bold text-xl hidden sm:inline"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              WanderSphere
            </motion.span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                item={item}
                pathname={location.pathname}
                textColor={textColor}
              />
            ))}
          </nav>

          <button
            className={`md:hidden ${textColor} focus:outline-none`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-primary-light/90 backdrop-blur-lg pt-20 px-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  item={item}
                  pathname={location.pathname}
                  mobile
                  onClick={() => setIsOpen(false)}
                  textColor={textColor}
                />
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer div to prevent content from starting under the header  */}
      <div className="h-16"></div>
    </>
  );
};

const NavLink = ({ item, pathname, mobile, onClick, textColor }) => {
  const isActive = pathname === item.path;
  const linkClasses = `relative ${textColor} hover:text-accent transition-colors duration-300 ${
    mobile ? "text-2xl py-2" : ""
  }`;

  return (
    <Link to={item.path} className={linkClasses} onClick={onClick}>
      {item.name}
      {isActive && (
        <motion.span
          className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-accent"
          layoutId="underline"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default Header;
