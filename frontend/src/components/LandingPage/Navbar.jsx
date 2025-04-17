import { Link } from 'react-router-dom';
import { useState } from 'react';
import { List, X } from 'phosphor-react';
import logoFlexnative from '../../assets/logoFlexnative.png';

const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1E1F27] text-white p-4 sm:px-20 px-8 flex items-center justify-between relative">
      <img className="w-[120px]" src={logoFlexnative} alt="Flexnative Logo" />

      <div className="hidden sm:flex gap-8 items-center text-[#949DA0]">
        <Link to="/Author">Author</Link>
        <button onClick={handleLogin} className="cursor-pointer flex items-center justify-center font-medium text-[12px] px-[30px] py-[10px] bg-[#5627FF] text-white rounded-[10px]">
          Login
        </button>
      </div>

      <div className="sm:hidden">
        <button className="cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[#1E1F27] flex flex-col items-start px-8 py-4 gap-4 sm:hidden text-[#949DA0] z-50 shadow-lg">
          <Link className="hover:text-white" to="/Author" onClick={toggleMenu}>
            Author
          </Link>
          <button onClick={handleLogin} className="cursor-pointer flex items-center justify-center font-medium text-[12px] px-[20px] py-[10px] bg-[#5627FF] text-white rounded-[10px]">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
