import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPricing = () => {
    setIsOpen(false);
    navigate('/pricing');
  };

  const renderNavItem = (item: string) => {
    if (item === 'about' || item === 'blog' || item === 'development' || item === 'products') {
      return (
        <Link
          to={item === 'development' ? '/custom-development' : 
               item === 'products' ? '/products' : 
               `/${item}`}
          className="text-forex-black hover:text-forex-green font-medium transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-forex-green/5"
          onClick={() => setIsOpen(false)}
        >
          {item === 'about' ? 'About Us' : 
           item === 'blog' ? 'Blog' :
           item === 'products' ? 'Products' :
           'Custom Development'}
        </Link>
      );
    }
    return (
      <button
        onClick={() => scrollToSection(item)}
        className="text-forex-black hover:text-forex-green font-medium transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-forex-green/5"
      >
        {item === 'home' ? 'Home' : 'Contact Us'}
      </button>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/TheforexCompany.png" 
                alt="The Forex Company Logo" 
                className="h-64 w-auto transition-transform duration-300 hover:scale-105" 
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-1">
            {['home', 'about', 'development', 'products', 'blog', 'contact'].map((item) => (
              <div key={item} className="px-1">
                {renderNavItem(item)}
              </div>
            ))}
          </div>

          {/* Auth Buttons - Right */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={goToPricing}
              className="px-5 py-2 bg-forex-green text-white rounded-lg font-medium transition-all duration-300 hover:bg-forex-darkgreen hover:shadow-lg hover:shadow-forex-green/20 transform hover:-translate-y-0.5"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-forex-black focus:outline-none hover:text-forex-green transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl">
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
              {['home', 'about', 'development', 'products', 'blog', 'contact'].map((item) => (
                <div key={item} className="py-1">
                  {renderNavItem(item)}
                </div>
              ))}
              <div className="flex flex-col space-y-2 pt-3 mt-2 border-t border-gray-100">
                <button
                  onClick={goToPricing}
                  className="px-4 py-2 bg-forex-green text-white rounded-lg font-medium transition-all duration-300 hover:bg-forex-darkgreen hover:shadow-lg hover:shadow-forex-green/20"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
