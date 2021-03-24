import { useState } from "react";

import BuyCart from "./BuyCart";

const landingProduct = {
	quantity: 5,
	sizes: ["11", "02", "03", "04", "05"],
	imgSrc: "/assets/adidas-swift-run-black.png",
	name: "Adidas Swift",
	priceCurrency: "GBP",
	price: 75.99,
	model: "Run Summer Shoes"
};

export default function Landing() {
	const [buyModal, setBuyModal] = useState(false);

	const onBuy = () => setBuyModal(true);

	return (
		<>
			<video
        className="h-screen w-full object-cover absolute z-0"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        style={{ filter: "brightness(40%)" }}
        src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-ss21-solarboost-launch-hp-MH-large-3d-d_idfozi.mp4"
        jtype="video/mp4"
        disablePictureInPicture
        disableRemotePlayback
      />
      <div className="flex h-full w-full z-10 relative">
        <div className="bg-transparent h-full w-3/6 p-24 pt-56 text-white space-y-6">
          <div className="text-wrap-all text-bold" style={{ fontSize: "1.5em" }}>
            <p>
              Inspired by classic runners, these shoes offer a laid-back sporty style.
            </p>
            <p className="mt-5">
              They have streamlined shape in lightweight knit. Outfitted for hot weather with a combination
              of cool-touch yarn and a temperature-regulating Outlast®sockliner 
            </p>
          </div>
          <div>
            <button
              className="p-4 pl-6 pr-6 bg-white text-black text-bolder hover:bg-black hover:text-white duration-200"
              onClick={onBuy}
            >
              Buy
            </button>
          </div>
        </div>
        <div
          className="w-3/6 bg-white absolute transform -rotate-6 shadow-xl"
          style={{
            height: "150vh",
            top: "-40px",
            right: "-50px"
          }}
        >
          <div className="mt-25 p-10 pt-64 h-full relative transform rotate-6">
            <div className="text-7xl">
              <h1>
                {landingProduct.name}
              </h1>
              <h1>
                {landingProduct.model}
              </h1>
            </div>
            <div className="absolute z-10 w-3/4 h-3/4" style={{ transform: "rotate(-15deg)" }}>
              <img src={landingProduct.imgSrc} />
            </div>
          </div>
        </div> 
      </div>
      {buyModal && <BuyCart item={landingProduct} onClose={() => setBuyModal(false)} />}
		</>
	);
};