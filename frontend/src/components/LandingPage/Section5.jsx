import React from "react";
import clisen from "../../assets/clisen.png";

const Section5 = () => {
  return (
    <div className="mb-[15rem] px-4">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#5627FF] relative top-[5rem] -left-8 sm:left-4 sm:text-[120px] sm:translate-x-2">
          “
        </p>

        <h1 className="text-white font-regular text-[20px] sm:text-[32px] max-w-[600px] mb-[4rem] sm:ml-[70px]">
          This platform has been a{" "}
          <span className="text-[#5627FF]">game-changer</span> for my career!
          Before the React Native course, I had little experience in mobile
          development. The hands-on projects helped me learn quickly and build a
          functional app from scratch. Thanks to this course, I gained
          confidence, landed my dream job as a mobile developer, and my career
          has been thriving ever since!
        </h1>

        <div className="text-white flex flex-col items-end">
          <div className="flex items-center gap-4 sm:gap-6">
            <img
              src={clisen}
              alt="userProfile"
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="font-bold text-[14px] sm:text-[16px]">
                Clisen Ardy
              </h3>
              <p className="text-[#949DA0] text-[12px] sm:text-[14px]">
                Mobile Developer <br />
                with Java
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
