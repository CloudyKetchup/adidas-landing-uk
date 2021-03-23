import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <Navbar/>
      <div className="h-full w-full relative">
        <Landing/>
        <div className="h-screen absolute z-10 w-full">
          <div className="h-2/6 grid grid-flow-col grid-cols-4 grid-rows-1 gap-4 relative p-10 space-x-4">
            <CategoryCard title="Shoes" imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/a-MAR-supercourt-desktop_tcm143-473965.jpg" />
            <CategoryCard title="Shorts" imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/Dotcom_Shorts_MA_812x480px_tcm143-509728.jpg" />
            <CategoryCard title="T-Shirts" imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/Dotcom_BBall_MA_812x480px_tcm143-509729.jpg" />
            <CategoryCard title="Swimwear" imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/Dotcom_Swim_opt2_MA_812x480px_tcm143-509734.jpg" />
          </div>
          <div className="flex">
            
          </div>
        </div>
      </div>
    </div>
  );
};
