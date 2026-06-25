import React, { useEffect, useState } from 'react';
import Logo from '../../assets/CPMS.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function LandingNavbar() {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [buttonSize, setButtonSize] = useState('lg');
  const [logoText, setLogoText] = useState('PlaceBridge'); // Always "PlaceBridge"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);

    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 600) setButtonSize('sm');
      else if (width <= 768) setButtonSize('md');
      else setButtonSize('lg');
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'backdrop-blur-md bg-white/80 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-3 px-4">
        {/* Logo Section */}
        <div
          className="flex items-center gap-4 cursor-pointer transition-transform hover:scale-105 duration-150"
          onClick={() => navigate('/')}
        >
          <img
            src={Logo}
            alt="PlaceBridge Logo"
            className="rounded-xl border border-gray-300 w-28 h-28 md:w-32 md:h-32 shadow-lg"
          />
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
            {logoText}
          </h1>
        </div>

        {/* Buttons Section */}
        <div className="flex gap-3 items-center">
          <Button
            variant="outline-primary"
            size={buttonSize}
            className="transition-all hover:scale-105 hover:shadow-md px-3 md:w-32"
            onClick={() => navigate('/student/login')}
          >
            Login
          </Button>

          <Button
            size={buttonSize}
            className="transition-all hover:scale-105 hover:shadow-md px-3 md:w-32 bg-[#FF9800] text-white border-none hover:bg-[#e07b00]"
            onClick={() => navigate('/student/signup')}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}

export default LandingNavbar;