import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

import {
	MenuIcon,
	HomeIcon,
	PhoneIcon,
	BookOpenIcon,
	XIcon,
} from "@heroicons/react/solid";

const Header = () => {
	const router = useRouter();
	const menuRef = useRef();

	const [menuOpen, setMenuOpen] = useState(false);
	const [menuClosed, setMenuClosed] = useState(true);

	const menuHandler = () => {
		setMenuOpen(!menuOpen);
		setMenuClosed(!menuClosed);
	};

	useEffect(() => {
		let handler = (event) => {
			if (!menuRef.current.contains(event.target)) {
				menuHandler();
			}
		};

		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	return (
		<header className='z-50 bg-gray-50 h-[60px] md:h-[80px] shadow-lg sticky top-0'>
			<div className='max-w-[1500px] h-full mx-auto text-gray-900 flex justify-between items-center px-4 2xl:px-0'>
				<h1
					onClick={() => router.push("/")}
					className='lg:hidden text-xl md:text-4xl cursor-pointer rounded-full py-1 px-3 md:py-2 bg-gray-900 text-white'>
					CF WebDev
				</h1>
				<h1
					onClick={() => router.push("/")}
					className=' bg-gray-900 text-white p-2 rounded-full text-3xl hidden lg:ml-8 lg:inline-flex cursor-pointer'>
					Caolan Fanning WebDev
				</h1>
				<nav className='hidden md:inline-flex cursor-pointer md:text-2xl mr-3 '>
					<ul className='flex space-x-2'>
						<li
							className='ring-2 ring-current p-2 rounded-full  hover:bg-gray-900 hover:text-white
							duration-150  active:bg-gray-200 w-[150px] flex justify-center transition-all ease-in'
							onClick={() => router.push("/")}>
							Home
						</li>
						<li
							className='ring-2 ring-current p-2  hover:bg-gray-900 hover:text-white
							duration-150 rounded-full active:bg-gray-200 w-[150px] flex justify-center transition-all ease-in '
							onClick={() => router.push("/about")}>
							About
						</li>
						<li
							className=' ring-2 ring-current  hover:bg-gray-900 hover:text-white rounded-full  active:bg-gray-200 w-[150px] flex justify-center transition-allduration-150 ease-in p-2'
							onClick={() => router.push("/contact")}>
							Contact
						</li>
					</ul>
				</nav>
				<button className='md:hidden'>
					{menuOpen && (
						<XIcon
							className='h-6 active:rotate-180 ease-in-out transition-all duration-200'
							onClick={() => {
								`${setMenuOpen(!menuOpen)} ${setMenuClosed(!menuClosed)}`;
							}}
						/>
					)}
					{menuClosed && (
						<MenuIcon
							onClick={() => {
								`${setMenuOpen(!menuOpen)} ${setMenuClosed(!menuClosed)}`;
							}}
							className='h-6 onTouch:rotate-180 active:rotate-180 ease-in-out transition-all duration-200'
						/>
					)}
				</button>
			</div>
			<nav
				ref={menuRef}
				className={`md:hidden h-screen w-1/2 bg-gray-50 text-gray-900 shadow-lg ${
					menuClosed && "-translate-x-full transition duration-200 ease-in"
				} ${menuOpen && "transition duration-200 ease-in"} `}>
				<ul className='flex flex-col space-y-4 text-base'>
					<div
						onClick={() => {
							`${router.push("/")} ${menuHandler}`;
						}}
						className='flex items-center space-x-2 ml-5 mt-4'>
						<HomeIcon className='h-6 p-1 border-2  rounded-full' />
						<li className=''>Home</li>
					</div>
					<div className='border-b-2 border-white' />
					<div
						onClick={() => {
							`${router.push("/about")} ${menuHandler}`;
						}}
						className='flex items-center space-x-2 ml-5'>
						<BookOpenIcon className='h-6 p-1 border-2  rounded-full' />
						<li className=''>About</li>
					</div>
					<div className='border-b-2 border-white' />
					<div
						onClick={() => {
							`${router.push("/contact")} ${menuHandler}`;
						}}
						className='flex items-center space-x-2 ml-5'>
						<PhoneIcon className='h-6 p-1 border-2 rounded-full' />
						<li className=''>Contact</li>
					</div>
					<div className='border-b-2 border-white' />
				</ul>
			</nav>
		</header>
	);
};

export default Header;
