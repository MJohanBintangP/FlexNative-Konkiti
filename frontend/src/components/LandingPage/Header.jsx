import imgH1 from '../../assets/imgH1.png';

const Header = () => {
  return (
    <header className="max-w-[1400px] mx-auto px-4 mt-16 mb-36">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 mb-16">
        <div className="text-center lg:text-left">
          <h1 className="text-white font-bold text-[36px] sm:text-[48px] lg:text-[60px] max-w-[600px] leading-tight">
            Master <span className="text-[#5627FF]">React Native</span> Faster
          </h1>
          <p className="text-white text-[14px] sm:text-[15px] max-w-[400px] mt-4 mx-auto lg:mx-0">Learn React Native with a structured curriculum, practical projects, and community support. Build engaging cross-platform apps quickly.</p>
        </div>

        <img className="w-full max-w-[500px] mx-auto" src={imgH1} alt="imgH1" />
      </div>
    </header>
  );
};

export default Header;
