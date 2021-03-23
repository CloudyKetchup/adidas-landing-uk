import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

export default function BuyCart({ item, onClose }) {
	const [quantity, setQuantity] = useState(1);
	const [size, setSize] = useState(item.sizes[0]);

	const getQuantityList = () => {
		const list = [];

		for (let i = 1; i <= item.quantity; i++) {
			list.push(i);
		}

		return list;
	};

	return (
		<div
			className="bg-white fixed z-30 h-full w-full overflow-y-hidden text-black shadow-inner"
			style={{
				top: 154,
				height: "calc(100vh - 154px)",
				animationName: "fade",
				animationDuration: "0.4s",
			}}
		>
			<div className="flex relative w-full h-full">
				<div className="absolute top-10 right-10" onClick={onClose}>
					<AiOutlineClose color="black" size="3em" />
				</div>
				<div className="w-1 p-10 space-y-4 justify-middle text-bold text-2xl h-full">
					<div className="text-bolder text-base">
						QTY
					</div>
					{getQuantityList().map(q => (
						<div
							key={q}
							className={`cursor-pointer ml-2 ${quantity === q && "text-red-500"} hover:text-red-500`}
							onClick={() => setQuantity(q)}
						>
							{q}
						</div>
					))}
				</div>
				<div className="flex w-4/5 h-full">
					<div className="p-32 pl-0 pr-12 w-3/6">
						<div className="relative bg-gray-100 rounded-full w-full h-full">
							<img src={item.imgSrc} className="absolute" style={{ transform: "rotate(-45deg)" }} />
						</div>
					</div>
					<div className="flex-1 space-y-4 p-5 pt-24 pb-15 w-3/6">
						<div className="text-bold text-4xl">
							<h5>{item.name} {item.model}</h5>
						</div>
						<div className="text-bold text-2xl">
							{item.priceCurrency} - {item.price}
						</div>
						<div className="text-xl text-gray-600">
							Lifestyle sneakers that seamlessly blend vintage style with modern inovation
						</div>
						<div className="text-xl text-gray-400">
							Rooted deep in adidas heritage but designed for the present, the {item.name} is the key of
							the product line. These fasionable, functional shoes are full of urban wanerlust.
						</div>
						<div className="flex pt-20 text-xl text-bolder">
							<button className="rounded-md p-5 pl-10 pr-10 bg-black text-white">
								Purchase
							</button>
							<button className="rounded-md p-5 pl-10 pr-10 bg-white">
								Size: {size}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};