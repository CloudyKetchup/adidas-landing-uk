import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
	return (
  	<nav className="fixed inset-x-0 z-20 shadow-lg" style={{
  		background: "rgba(255, 255, 255, 0.5)",
  		backdropFilter: "blur(15px)"
  	}}>
      <div className="mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-2 space-y-2 p-8">
            <div>
             	<a
             		href="#"
             		className="flex center-items mt-5 py-5 px-2 bg-no-repeat"
             		style={{
             			height: 70,
             			width: 70,
             			backgroundImage: "url(https://adidas.co.uk/glass/react/8c2f449/assets/img/icon-adidas-logo.svg)"
             		}}
             	/>
      			</div> 
          </div>
          <div className="hidden md:flex items-center text-white">
            <div
            	className="bg-black h-full hidden md:flex items-center space-x-16 ml-auto pl-8 pr-8"
            >
            	<a href="#" className="py-5 px-3 hover:text-gray-400">Men</a>
            	<a href="#" className="py-5 px-3 hover:text-gray-400">Woman</a>
            	<a href="#" className="py-5 px-3 hover:text-gray-400">Kids</a>
            	<a href="#" className="py-5 px-3 hover:text-gray-400">Sports Brands</a>
           	</div>
           	<div className="p-8 flex h-full space-x-4 content-center bg-white opacity-100">
           		<div className="rounded-md bg-transparent p-3 pt-1 pb-1 m-auto flex space-x-4 content-center">
           			<input
           				placeholder="Search"
           				className="p-3 border-none outline-none text-black font-4xl font-bold"
           			/>
           			<AiOutlineSearch size="2.5em" className="m-auto" color="black"/>
           		</div>
           	</div>
          </div>
        </div>
      </div>
    </nav>
	);
};