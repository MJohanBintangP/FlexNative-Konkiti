import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LogoFlexNative from '../../assets/logoFlexnative.png';
import iconHome from '../../assets/Home.svg';
import iconBookmark from '../../assets/Bookmark.svg';
import iconCourse from '../../assets/Teacher.svg';
import iconSquare from '../../assets/FormatSquare.svg';

function Sidebar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname.toLowerCase());

  useEffect(() => {
    setActiveSection(location.pathname.toLowerCase());
  }, [location.pathname]);

  const navItems = [
    { path: '/Home', icon: iconHome, label: 'Home' },
    { path: '/Bookmarks', icon: iconBookmark, label: 'Bookmarks' },
    { path: '/Courses', icon: iconCourse, label: 'Courses' },
    { path: '/Careerpaths', icon: iconSquare, label: 'Career Paths' },
  ];

  return (
    <div className="w-64 h-screen bg-[#1E1F27] text-white fixed top-0 left-0 p-4 outline-[#3E3F46] outline">
      <div className="ml-2">
      <img className="w-[150px] mt-[1rem] mb-[2.5rem] ml-[1rem]" src={LogoFlexNative} alt="LogoFlexNative" />

        <ul className="space-y-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className={`flex gap-5 py-2 px-6 rounded-[10px] ${activeSection === item.path.toLowerCase() ? 'bg-[#2B2C34]' : 'hover:bg-[#2B2C34]'}`}>
                <img src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
