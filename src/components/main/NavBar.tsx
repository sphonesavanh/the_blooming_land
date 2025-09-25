import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="fixed w-full bg-[#493a2f]">
      <div className="container px-8 py-4 mx-auto xl:px-0">
        <nav className="flex mx-auto lg:justify-end gap-10 max-w-screen-xl">
          {/* Logo Section */}
          <Link
            to="/content"
            className="text-2xl font-bold text-white font-serif"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-2xl font-bold text-white font-serif"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-2xl font-bold text-white font-serif"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
