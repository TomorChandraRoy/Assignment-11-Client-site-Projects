import Marquee from "react-fast-marquee";
import logo1 from "../../image/1.png";
import logo2 from "../../image/2.png";
import logo4 from "../../image/3.png";



const MarqueePage = () => {
  
  return (
    <div className="my-10 ">
        <h2 className=" mb-7 font-extrabold bg-red-600 text-white w-fit mx-auto px-2 py-1 rounded text-2xl">Payment By </h2>
      <Marquee>
         <div className="flex gap-52 my-14 w-20% h-14">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo4} alt="" />
         </div>
      </Marquee>
    </div>
  );
};

export default MarqueePage;
