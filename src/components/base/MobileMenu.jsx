import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import PropTypes from 'prop-types';

const MobileMenu = ({ dropdownOptions, toggleMenu }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-90 text-white z-50 flex flex-col items-center justify-start pt-12 overflow-y-auto">
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-3xl text-white"
      >
        <FaTimes />
      </button>
      <nav className="w-full px-6">
        {dropdownOptions.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to={link.path}
                  className="flex flex-col items-center text-lg hover:text-green-400 duration-200"
                  onClick={toggleMenu} // Close menu on click
                >
                  <div className="flex items-center">
                    <p className="mr-2">{link.icon}</p>
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};
MobileMenu.propTypes = {
  dropdownOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          path: PropTypes.string.isRequired,
          icon: PropTypes.element,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
