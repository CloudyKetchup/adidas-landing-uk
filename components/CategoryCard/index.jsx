import styles from "./CategoryCard.module.css";

export default function CategoryCard({ title, imgSrc }) {
	return (
		<div className={`${styles.category__card} flex-1 w-full h-full rounded-md shadow-2xl relative cursor-pointer`}>
			<div className="absolute z-30 h-full w-full overflow-hidden">
				<img className="object-cover rounded-md h-full w-full absolute z-0" src={imgSrc} />
				<div className="bg-white absolute transform rotate-45 p-10 pl-4 pt-4 -left-16 -bottom-28 z-0" style={{ height: "70%", width: "70%" }}>
					<span className="text-bolder text-md">{title}</span>
				</div>
			</div>
		</div>
	);
};