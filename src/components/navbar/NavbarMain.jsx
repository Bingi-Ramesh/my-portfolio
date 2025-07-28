import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <>
      {/* Extra small screen fix */}
      <style>{`
        @media (max-width: 350px) {
          .navbar-inner {
            padding: 0.4rem;
          }
          .navbar-toggler {
            padding: 0.3rem;
            width: 40px;
            height: 40px;
          }
          .navbar-logo,
          .navbar-btn {
            display: none;
          }
        }
      `}</style>

      <nav className="max-w-[1400px] mx-auto w-full fixed left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-4 mt-2 px-2 sm:px-4">
        {/* Main Navbar container */}
        <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto bg-black rounded-full border border-orange navbar-inner">
          {/* Logo hidden <350px */}
          <div className="navbar-logo">
            <NavbarLogo />
          </div>

          {/* Links (toggle for all <lg screens) */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-[70px] left-0 w-full bg-black p-4 rounded-md lg:static lg:block lg:w-auto`}
          >
            <NavbarLinks />
          </div>

          {/* Button hidden <350px */}
          <div className="navbar-btn hidden sm:block">
            <NavbarBtn />
          </div>
        </div>

        {/* Menu icon visible on <lg */}
        <div className="flex lg:hidden bg-black items-center justify-center rounded-full border border-orange navbar-toggler">
          <NavbarToggler />
        </div>
      </nav>
    </>
  );
};

export default NavbarMain;
