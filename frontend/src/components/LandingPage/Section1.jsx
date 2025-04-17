import React from 'react';
import section1Img1 from '../../assets/section1Img1.png';
import section1Img2 from '../../assets/section1Img2.png';
import section1Img3 from '../../assets/section1Img3.png';

const Section1 = () => {
  return (
    <div className="max-w-[1350px] mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between text-white mb-8 lg:mb-[8rem] gap-8">
        <h1 className="font-bold text-[28px] sm:text-[40px]">Build Better Mobile Apps</h1>
        <p className="max-w-[350px] text-[14px] sm:text-base">
          From beginner to advanced, master React Native with step-by-step guidance.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-8 lg:gap-16 mb-12 lg:mb-32 text-white">
  {/* Card 1 */}
  <div className="bg-[#393A42] text-left w-full sm:w-[300px] h-[400px] rounded-4xl flex flex-col justify-center items-center p-4">
    <img className="w-[160px] sm:w-[220px] mt-4 sm:mt-8" src={section1Img1} alt="Higher Work Efficiency" />
    <h4 className="mt-6 sm:mt-8 text-[16px] sm:text-[18px] font-semibold text-center">
      Higher Work Efficiency
    </h4>
  </div>

  {/* Card 2 */}
  <div className="bg-[#393A42] text-left w-full sm:w-[300px] h-[400px] rounded-4xl flex flex-col justify-center items-center p-4">
    <img className="w-[220px] mt-4 sm:mt-8" src={section1Img2} alt="Faster app development time" />
    <h4 className="mt-6 sm:mt-8 text-[16px] sm:text-[18px] font-semibold text-center">
      Faster app development time
    </h4>
  </div>

  {/* Card 3 */}
  <div className="bg-[#393A42] text-left w-full sm:w-[300px] h-[400px] rounded-4xl flex flex-col justify-center items-center p-4">
    <img className="w-[160px] sm:w-[220px] mt-4 sm:mt-8" src={section1Img3} alt="Simpler app development process" />
    <h4 className="mt-6 sm:mt-8 text-[16px] sm:text-[18px] font-semibold text-center">
      Simpler app development process
    </h4>
  </div>
</div>

    </div>
  );
};

export default Section1;
