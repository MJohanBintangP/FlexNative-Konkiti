import React from 'react';
import section3img1 from '../../assets/section3img1.png';
import section3img2 from '../../assets/section3img2.png';
import section3img3 from '../../assets/section3img3.png';

const Section3 = () => {
  return (
    <div className="mb-[12rem] px-4">
      <div className="flex flex-col mx-auto text-center mb-[4rem]">
        <h1 className="text-white font-bold text-[30px] sm:text-[35px] mx-auto max-w-[500px] mb-[2rem]">
          Everything you need for a successful career growth
        </h1>
        <p className="text-[#949DA0] text-[18px] sm:text-[20px] max-w-[500px] mx-auto">
          Learn, assess your skills, and get certified to stand out in the industry
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-evenly gap-6 sm:gap-10">
        <div className="bg-[#393A42] gap-6 w-full sm:w-[300px] h-[400px] rounded-4xl text-white flex flex-col items-center justify-center">
          <div className="max-w-[250px] text-center">
            <h1 className="text-[#949DA0]">Courses & Career Paths</h1>
            <p className="text-center">Master React Native with interactive courses, from beginner to expert</p>
          </div>
          <img className="w-[200px]" src={section3img1} alt="section3img1" />
        </div>

        <div className="bg-[#393A42] gap-6 w-full sm:w-[300px] h-[400px] rounded-4xl text-white flex flex-col items-center justify-center">
          <div className="max-w-[250px] text-center">
            <h1 className="text-[#949DA0]">Community & Events</h1>
            <p className="text-center">Join developers, attend events, and stay updated on React Native trends</p>
          </div>
          <img className="w-[200px]" src={section3img2} alt="section3img2" />
        </div>

        <div className="bg-[#393A42] gap-6 w-full sm:w-[300px] h-[400px] rounded-4xl text-white flex flex-col items-center justify-center">
          <div className="max-w-[250px] text-center">
            <h1 className="text-[#949DA0]">Projects</h1>
            <p className="text-center">Apply your knowledge to real cases and build a strong portfolio</p>
          </div>
          <img className="w-[200px] relative -top-[2rem]" src={section3img3} alt="section3img3" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row max-w-[1250px] text-white mx-auto justify-between mt-[8rem] gap-8 sm:gap-0">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[45px] sm:text-[55px] font-bold">500K+</h1>
          <p className="text-[#949DA0]">Members upskill with FlexNative</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-[45px] sm:text-[55px] font-bold">3.5M+</h1>
          <p className="text-[#949DA0]">Learning modules completed</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[45px] sm:text-[55px] font-bold">4.8/5</h1>
          <p className="text-[#949DA0]">Average rating from our learners</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
