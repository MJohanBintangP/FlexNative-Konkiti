import React from 'react';
import section2img1 from '../../assets/section2img1.png';
import section2img2 from '../../assets/section2img2.png';
import section2img3 from '../../assets/section2img3.png';
import section2img4 from '../../assets/section2img4.png';
import section2img5 from '../../assets/section2img5.png';

const Section2 = () => {
  return (
    <div className="max-w-[1300px] mx-auto mb-[10rem] px-4">
      <div className="flex flex-col sm:flex-row justify-between text-white mb-[10rem]">
        <h1 className="font-bold text-[32px] sm:text-[40px]">
          Why <span className="text-[#5627FF]">FlexNative</span>?
        </h1>
        <p className="max-w-[400px] mt-4 sm:mt-0">Join a supportive network of developers. Get feedback, share ideas, and learn from others' experiences.</p>
      </div>
      <div className="flex flex-col sm:flex-row text-white justify-between mb-[12rem] items-center">
      <img className="w-full sm:w-[400px] lg:w-[500px]" src={section2img1} alt="imgSection2" />
        <div className="flex flex-col gap-8 mt-8 sm:mt-0 sm:ml-8">
          <div className="flex items-center gap-4 sm:gap-8">
            <img className="w-[40px] sm:w-[50px]" src={section2img2} alt="" />
            <p className="text-[14px] sm:text-[16px]">Easy-to-follow Tutorials</p>
          </div>
          <div className="flex items-center gap-4 sm:gap-8">
            <img className="w-[40px] sm:w-[50px]" src={section2img3} alt="" />
            <p className="text-[14px] sm:text-[16px]">React Native Community</p>
          </div>
          <div className="flex items-center gap-4 sm:gap-8">
            <img className="w-[40px] sm:w-[50px]" src={section2img4} alt="" />
            <p className="text-[14px] sm:text-[16px]">Full Support</p>
          </div>
          <div className="flex items-center gap-4 sm:gap-8">
            <img className="w-[40px] sm:w-[50px]" src={section2img5} alt="" />
            <p className="text-[14px] sm:text-[16px]">React Native Basics</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col text-white max-w-[280px]">
          <h3 className="font-bold text-[18px]">Master React Native</h3>
          <p className="text-[14px] text-[#949DA0]">Learn with hands-on courses, projects, and assessments—always up to date</p>
        </div>
        <div className="flex flex-col text-white max-w-[280px]">
          <h3 className="font-bold text-[18px]">Fits Your Busy Schedule</h3>
          <p className="text-[14px] text-[#949DA0]">Our bite-sized, interactive learning makes it easy to upskill in just 5 minutes a day</p>
        </div>
        <div className="flex flex-col text-white max-w-[280px]">
          <h3 className="font-bold text-[18px]">Bridge Skill Gaps</h3>
          <p className="text-[14px] text-[#949DA0]">Advance your career by developing the right skills, fast</p>
        </div>
        <div className="flex flex-col text-white max-w-[280px]">
          <h3 className="font-bold text-[18px]">Not Sure Where to Start?</h3>
          <p className="text-[14px] text-[#949DA0]">Take our free Uxcel Pulse career quiz for personalized learning recommendations</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
