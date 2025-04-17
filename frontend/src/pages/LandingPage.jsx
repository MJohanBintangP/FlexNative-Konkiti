import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/LandingPage/Navbar';
import Header from '../components/LandingPage/Header';
import Footer from '../components/LandingPage/Footer';
import Section1 from '../components/LandingPage/Section1';
import Section2 from '../components/LandingPage/Section2';
import Section3 from '../components/LandingPage/Section3';
import Section4 from '../components/LandingPage/Section4';
import Section5 from '../components/LandingPage/Section5';
import Author from '../pages/LandingPage/Author';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
              <Footer />
            </>
          }
        />
        <Route path="/Author" element={<Author />} />
      </Routes>
    </div>
  );
};

export default LandingPage;
