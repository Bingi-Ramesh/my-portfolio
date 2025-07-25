import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];

  return (
    <div className="px-4">
      {/* Divider Line */}
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>

      {/* Footer Content */}
      <div className="max-w-[1200px] mx-auto mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Name */}
        <p className="text-2xl font-semibold text-lightGrey">Bingi Ramesh</p>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-lightGrey text-base font-medium">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                className="cursor-pointer hover:text-white transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <p className="max-w-[1200px] mx-auto text-center md:text-right mt-4 mb-12 text-xs text-lightBrown">
        © 2025 Ramesh Yadav | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
