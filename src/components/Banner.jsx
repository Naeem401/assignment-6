
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div
      className="h-[408px] md:h-[573px] w-full bg-cover bg-center flex flex-col justify-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
     <div className="w-[83%] mx-auto text-center md:text-left">
     <h4 className="md:text-2xl text-[#0FF1F6]">AI SDRs (aiDRs)</h4>
        <h1 className="text-[40px] md:text-[64px] font-bold text-white max-w-]343px] md:max-w-[391px] leading-[44px] md:leading-[78px]">More leads, <br /> less people.</h1>
  <p className="text-[18px] md:text-xl font-light max-w-[450px] text-[#d2d1d1] mt-4">Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
  <button className="bg-[#0FF1F6] text-[#002228] px-4 py-2 rounded-full hover:bg-cyan-600 mt-4 w-[327px] md:max-w-[216px]">Sign Up for the Beta</button>
     </div>
    </div>
  );
};

export default Banner;
