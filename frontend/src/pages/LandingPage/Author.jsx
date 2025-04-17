import React from 'react';
import ugmLogo from '../../assets/ugmLogo.svg';
import ugmText from '../../assets/ugmText.svg';
import telkomLogo from '../../assets/telkomLogo.svg';
import telkomText from '../../assets/telkomText.svg';
import { useNavigate } from 'react-router-dom';
import { CaretLeft } from '@phosphor-icons/react';

const Author = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-24 mb-24">
      <button
        className="fixed top-5 left-5 flex items-center text-black font-semibold bg-white px-4 py-2 rounded-lg transition z-50"
        onClick={() => navigate('/')}
      >
        <CaretLeft size={20} weight="bold" className="bg-transparent mr-2" />
        Back
      </button>

      {/* UGM Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-6 w-full">
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <img className="w-full max-w-[400px]" src={ugmLogo} alt="ugmLogo" />
          <img className="w-full max-w-[400px] mt-4" src={ugmText} alt="ugmText" />
        </div>

        <div className="text-white flex flex-col gap-8 px-4 sm:px-12 items-center lg:items-end text-center lg:text-right">
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[24px] sm:text-[30px] block"
              href="https://www.instagram.com/clis3n"
            >
              CLISEN ARDY LAKSONO W
            </a>
            <p className="text-[#CFCFCF] text-[16px] sm:text-[20px]">UIX Designer</p>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[24px] sm:text-[30px] block"
              href="https://www.instagram.com/kusumaj_ris"
            >
              RISMA KUSUMAJATI
            </a>
            <p className="text-[#CFCFCF] text-[16px] sm:text-[20px]">UIX Designer</p>
          </div>
        </div>
      </div>

      {/* Telkom Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6 w-full">
        <div className="text-white flex flex-col gap-8 px-4 sm:px-12 items-center lg:items-start text-center lg:text-left">
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[24px] sm:text-[30px] block"
              href="https://www.instagram.com/mjohanbintangp"
            >
              MOCH JOHAN BINTANG PRATAMA
            </a>
            <p className="text-[#CFCFCF] text-[16px] sm:text-[20px]">Web Developer</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-end">
          <img className="w-full max-w-[400px]" src={telkomLogo} alt="telkomLogo" />
          <img className="w-full max-w-[400px] mt-4" src={telkomText} alt="telkomText" />
        </div>
      </div>
    </div>
  );
};

export default Author;
