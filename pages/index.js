import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import Landing from "../components/Landing";

const ImageCard = ({ imgSrc, title }) => (
  <div className="bg-black rounded-md shadow-xl relative cursor-pointer">
    <picture className="h-full w-full absolute z-10 hover:opacity-50">
      <img
        className="h-full w-full rounded-md object-cover opacity-100"
        src={imgSrc}
      />
    </picture>
    <div className="z-20 bottom-16 absolute pl-10">
      <span className="dela-gotic-one text-white text-bolder text-6xl">{title}</span>
    </div>
  </div>
);

export default function Home() {

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar/>
      <div className="h-full w-full relative">
        <Landing/>
        <div className="h-screen absolute z-10 w-full space-x-4">
          <div className="h-2/6 grid grid-flow-col grid-cols-4 grid-rows-1 gap-4 relative p-10 space-x-4">
            <CategoryCard title="Shoes" imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/a-MAR-supercourt-desktop_tcm143-473965.jpg" />
            <CategoryCard title="Shorts" imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/Dotcom_Shorts_MA_812x480px_tcm143-509728.jpg" />
            <CategoryCard title="T-Shirts" imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/Dotcom_BBall_MA_812x480px_tcm143-509729.jpg" />
            <CategoryCard title="Swimwear" imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/Dotcom_Swim_opt2_MA_812x480px_tcm143-509734.jpg" />
          </div>
          <div className="h-1/6 flex justify-center content-center">
            <h2 className="m-auto text-black text-bolder text-2xl">For who you are buying?</h2>
          </div>
          <div className="h-3/6 w-full grid grid-flow-col grid-cols-3 grid-rows-1 gap-6 p-10 pl-5 pr-10">
            <ImageCard imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/updated_gender_women_dt_tcm143-636701.jpg" title="Woman"/>
            <ImageCard imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/updated_gender_men_dt_tcm143-636698.jpg" title="Men"/>
            <ImageCard imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/updated_gender_kids_dt_tcm143-636695.jpg" title="Kids"/>
          </div>
        </div>
      </div>
    </div>
  );
};
