import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useCourses } from '../../context/CourseContext';
import iconSearch from '../../assets/Search.svg';

const Topbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { courses } = useCourses();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filtered = courses.filter((course) => course.title.toLowerCase().includes(query.toLowerCase()));
      setSearchResults(filtered);
      setShowSearchDropdown(true);
    } else {
      setSearchResults([]);
      setShowSearchDropdown(false);
    }
  };

  const handleSelectCourse = (course) => {
    navigate('/courses', { state: { selectedCourse: course } });
    setShowSearchDropdown(false);
    setSearchQuery('');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownContainer = document.querySelector('.profile-dropdown');
      const searchContainer = document.querySelector('.search-container');

      if (dropdownContainer && !dropdownContainer.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (searchContainer && !searchContainer.contains(event.target)) {
        setShowSearchDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLogout = async (e) => {
    e.stopPropagation();
    try {
      await logout();
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="flex ml-[16rem] border-b border-[#3E3F46]">
      <div className="ml-[2rem] mr-[2rem] py-3 flex justify-between w-full">
        {/* Search Section */}
        <div className="search-container relative flex-1 max-w-md">
          <div className="flex items-center bg-[#14151D] rounded-full px-4 gap-3">
            <input
              type="text"
              placeholder="Search Courses"
              className="flex-1 bg-transparent text-[#949DA0] outline-none py-2 pl-5 pr-2"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => searchQuery && setShowSearchDropdown(true)}
            />
            <button className="pr-3 flex-shrink-0">
              <img src={iconSearch} alt="icon search" className="w-5 h-5" />
            </button>
          </div>

          {showSearchDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-b from-[#1E1F27] to-[#2A2B32] rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto custom-scrollbar">
              <div className="p-2 space-y-1">
                {searchResults.length > 0 ? (
                  searchResults.map((course) => (
                    <div
                      key={course._id}
                      className="group px-4 py-3 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 cursor-pointer transition-all duration-200 rounded-lg transform hover:scale-[1.02]"
                      onClick={() => handleSelectCourse(course)}
                    >
                      <div className="text-white font-medium truncate group-hover:text-blue-400 transition-colors">{course.title}</div>
                      <div className="text-sm text-gray-400 mt-1 flex items-center gap-2">
                        <span className="px-2 py-1 bg-[#3E3F46] rounded-full text-xs">{course.level}</span>
                        <span className="text-xs">•</span>
                        <span className="text-xs">{course.duration}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-400 italic">No matching courses found...</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Profile Section */}
        <div className="relative profile-dropdown flex items-center gap-4 cursor-pointer" onClick={toggleDropdown}>
          <div className="text-white font-semibold">{user?.name || 'Admin'}</div>
          <img
            src={user?.picture || 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1741843826~exp=1741847426~hmac=020df7e72bc4111c416046e5867e940eee11db39ec014e41951344443f172d3d&w=900'}
            alt="User Profile"
            className="w-10 h-10 rounded-full object-cover border border-[#3E3F46]"
          />

          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-[#1E1F27] rounded-lg shadow-lg z-10">
              <ul className="py-2">
                <li className="px-6 py-2 text-white hover:bg-red-600 hover:text-white cursor-pointer rounded-lg" onClick={handleLogout}>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
