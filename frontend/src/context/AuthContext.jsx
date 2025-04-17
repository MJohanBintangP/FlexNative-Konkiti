import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);

  // Fungsi untuk memuat data pengguna saat komponen dimuat
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('http://localhost:5000/auth/user', { credentials: 'include' });
        if (!res.ok) throw new Error('Failed to fetch user');
        const data = await res.json();
        if (data.user) setUser(data.user);
      } catch (err) {
        console.error('Auth error:', err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Fungsi untuk menambah/menghapus bookmark
  const toggleBookmark = (course) => {
    setBookmarks((prev) => {
      const exists = prev.some(item => item._id === course._id);
      if (exists) {
        return prev.filter(item => item._id !== course._id);
      } else {
        return [...prev, course];
      }
    });
  };

  // Fungsi untuk menambah kursus ke dalam jalur karir
  const addCareerPathCourses = (courses) => {
    setBookmarks((prev) => {
      const newBookmarks = [...prev];
      courses.forEach(course => {
        if (!newBookmarks.some(item => item._id === course._id)) {
          newBookmarks.push(course);
        }
      });
      return newBookmarks;
    });
  };

  // Fungsi logout
  const logout = async () => {
    try {
      const res = await fetch('http://localhost:5000/auth/logout', { method: 'GET', credentials: 'include' });
      if (!res.ok) throw new Error('Logout failed');
      setUser(null);
      window.location.href = '/';
    } catch (err) {
      console.error('Logout error:', err.message);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-white">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      logout,
      bookmarks,
      toggleBookmark,
      addCareerPathCourses
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
