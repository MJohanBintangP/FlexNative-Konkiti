import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { CourseProvider } from './context/CourseContext';
import LandingPage from './pages/LandingPage';
import Course from './pages/Course';
import Author from './pages/LandingPage/Author';
import Courses from './pages/CoursePage/Courses';
import AddCourse from './pages/CoursePage/addCourse';
import Bookmarks from './pages/CoursePage/Bookmarks';
import CareerPaths from './pages/CoursePage/Careerpaths';
import logoFlexnative from './assets/logoFlexnative.png';

function AppContent() {
  const { isLoading } = useContext(AuthContext);
  const [setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/auth/user', { withCredentials: true })
      .then((res) => {
        if (res.data) {
          setIsAuthenticated(true);
        }
      })
      .catch(() => setIsAuthenticated(false));
  }, [setIsAuthenticated]);

  if (isLoading) return <img src={logoFlexnative} alt="Load" />;

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<Course />} />
      <Route path="/Author" element={<Author />} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/Add-course" element={<AddCourse />} />
      <Route path="/Bookmarks" element={<Bookmarks />} />
      <Route path="/Careerpaths" element={<CareerPaths />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <CourseProvider>
        <Router>
          <AppContent />
        </Router>
      </CourseProvider>
    </AuthProvider>
  );
}

export default App;
