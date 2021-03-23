import { MdKeyboardArrowRight } from "react-icons/md";

export default function CategoryCard({ title, imgSrc }) {
	return (
		<div className="flex-1 w-full h-full bg-white rounded-md shadow-2xl">
			<img className="object-cover rounded-t-md h-3/4 w-full" src={imgSrc} />
			<div className="flex p-3 pl-6 pr-6 space-x-6 h-1/4 w-full">
				<div className="text-2xl mr-auto">
					<span>{title}</span>
				</div>
				<div className="ml-auto">
					<MdKeyboardArrowRight size="2.3em" />
				</div>
			</div>
		</div>
	);
};