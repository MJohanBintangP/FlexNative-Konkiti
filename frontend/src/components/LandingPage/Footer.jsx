import React from 'react';
import logoFlexnative from '../../assets/logoFlexnative.png';
import instagramIcon from '../../assets/Instagram.svg';
import twitterIcon from '../../assets/Twitter.svg';
import linkedinIcon from '../../assets/Linkedin.svg';
import facebookIcon from '../../assets/Facebook.svg';
import youtubeIcon from '../../assets/Youtube.svg';

const Footer = () => {
  return (
    <footer className="relative bottom-0 bg-[#1E1F27] w-full h-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center max-w-[1400px] mx-auto py-12 px-6 gap-6">
        <h1 className="text-white text-3xl lg:text-4xl font-bold max-w-[550px]">
          Ready to take your React Native skills to the next level?
        </h1>
        <button className="text-white text-sm bg-[#5627FF] px-6 py-3 rounded-[8px]" type="submit">
          Get Started
        </button>
      </div>

      <hr className="border-[#959595] max-w-[1400px] mx-auto" />

      <div className="flex flex-col lg:flex-row flex-wrap gap-10 px-6 mt-12 mb-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-2 text-[#949DA0] min-w-[250px]">
          <img className="w-[130px] mb-6" src={logoFlexnative} alt="logoFlexnative" />
          <a href="">About us</a>
          <a href="">Success Stories</a>
          <a href="">What Our Students Say</a>
          <a href="">Latest Updates</a>
          <a href="">Learning Path</a>
          <a href="">Support & FAQs</a>
          <div className="flex gap-3 mt-4">
            <img className="w-[20px]" src={instagramIcon} alt="Instagram" />
            <img className="w-[20px]" src={twitterIcon} alt="Twitter" />
            <img className="w-[20px]" src={linkedinIcon} alt="LinkedIn" />
            <img className="w-[20px]" src={facebookIcon} alt="Facebook" />
            <img className="w-[20px]" src={youtubeIcon} alt="YouTube" />
          </div>
        </div>

        <div className="flex flex-wrap gap-12 lg:gap-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col text-[#949DA0] gap-2">
              <h3 className="text-white font-semibold">Products</h3>
              <a href="">React Native Courses</a>
              <a href="">Certifications</a>
              <a href="">Portfolio Builder</a>
              <a href="">Job Board for Developers</a>
            </div>
            <div className="flex flex-col text-[#949DA0] gap-2">
              <h3 className="text-white font-semibold">Popular Courses</h3>
              <a href="">React Native Fundamentals</a>
              <a href="">Building UI Components</a>
              <a href="">Integrating APIs</a>
              <a href="">Publishing Apps</a>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col text-[#949DA0] gap-2">
              <h3 className="text-white font-semibold">Community</h3>
              <a href="">Discord Community</a>
              <a href="">React Native Mentors</a>
              <a href="">Top Learners Rankings</a>
            </div>
            <div className="flex flex-col text-[#949DA0] gap-2">
              <h3 className="text-white font-semibold">For Businesses</h3>
              <a href="">Corporate Training</a>
              <a href="">React Native for Startups</a>
              <a href="">Custom Training Corporation</a>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="text-[#949DA0] gap-2 flex flex-col">
              <h3 className="text-white font-semibold">Resources</h3>
              <a href="">Blog & Articles</a>
              <a href="">Success Stories</a>
              <a href="">Guides & Best Practices</a>
              <a href="">Scholarships & Discounts</a>
            </div>
            <div className="text-[#949DA0] gap-2 flex flex-col">
              <h3 className="text-white font-semibold">Assessments & Certifications</h3>
              <a href="">React Native Developer</a>
              <a href="">Mobile App Designer</a>
              <a href="">Full-Stack React Native</a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-[#959595] max-w-[1400px] mx-auto" />

      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1400px] mx-auto text-[#949DA0] px-6 py-8 gap-4">
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
          <a href="">Cookie Policy</a>
        </div>
        <p className="text-center">@ 2025 FlexNative, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
