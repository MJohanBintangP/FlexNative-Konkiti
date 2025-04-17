import React from 'react';
import sponshorship from '../../assets/sponshorship.png';

const Section4 = () => {
  return (
    <div className="mb-[8rem] px-4">
      <div className="bg-white rounded-lg md:rounded-3xl w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[800px] lg:max-w-[1000px] h-auto min-h-[200px] md:min-h-[300px] flex flex-col md:flex-row mx-auto mb-8 md:mb-16 lg:mb-[12rem] p-4 md:p-8">
        <div className="flex p-6 sm:p-12 mx-auto gap-6 sm:gap-22">
          <h1 className="text-[28px] sm:text-[35px] font-bold flex max-w-[450px]">
            Try FlexNative for free & level up your design career
          </h1>
          <div className="flex flex-col max-w-[300px]">
            <h3 className="font-semibold text-[13px] sm:text-[15px]">
              In just one year, our Pro members gained new skills, resulting in an average annual salary increase of 21.5%.
            </h3>
            <p className="text-[#949DA0] text-[10px] sm:text-[12px] mb-4">
              *numbers based on the [FlexNative 2024 Impact Report].
            </p>
            <a href="#" className="bg-[#5627FF] text-white rounded-[12px] flex justify-center py-2 mb-4">
              Get started
            </a>
            <p className="font-semibold text-[13px] sm:text-[15px] mx-auto">FlexNative for Teams</p>
          </div>
        </div>
      </div>

      <img className="mx-auto" src={sponshorship} alt="Sponsorship" />
    </div>
  );
};

export default Section4;
