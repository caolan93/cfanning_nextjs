import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";

import {
	MenuIcon,
	HomeIcon,
	PhoneIcon,
	BookOpenIcon,
	XIcon,
} from "@heroicons/react/solid";

const Header = () => {
	const router = useRouter();
	const ref = useRef();

	const [menuOpen, setMenuOpen] = useState(false);
	const [menuClosed, setMenuClosed] = useState(true);

	return (
		<header className='bg-gray-100 h-[60px] md:h-[80px] shadow-lg'>
			<div className='relative max-w-[1500px] mx-auto text-gray-700 flex justify-between items-center py-4 px-4 2xl:px-0'>
				<h1
					onClick={() => router.push("/")}
					className='lg:hidden text-xl md:text-4xl cursor-pointer'>
					CF WebDev
				</h1>
				<h1
					onClick={() => router.push("/")}
					className='text-4xl hidden lg:inline-flex mb-2 cursor-pointer'>
					Caolan Fanning WebDev
				</h1>
				<nav className='hidden md:inline-flex cursor-pointer md:text-2xl mr-3'>
					<ul className='flex space-x-2'>
						<li
							className='hover:shadow-md hover:shadow-white rounded-lg  active:bg-gray-200 w-[150px] flex justify-center transition duration-300 ease-in-out p-2'
							onClick={() => router.push("/")}>
							Home
						</li>
						<li
							className='hover:shadow-md hover:shadow-white rounded-lg  active:bg-gray-200 w-[150px] flex justify-center transition duration-300 ease-in-out p-2'
							onClick={() => router.push("/about")}>
							About
						</li>
						<li
							className='hover:shadow-md hover:shadow-white rounded-lg  active:bg-gray-200 w-[150px] flex justify-center transition duration-300 ease-in-out p-2'
							onClick={() => router.push("/contact")}>
							Contact
						</li>
					</ul>
				</nav>
				<button className='md:hidden'>
					{menuOpen && (
						<XIcon
							className='h-6'
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
							className='h-6'
						/>
					)}
				</button>
			</div>
			<nav
				className={`z-50 absolute md:hidden h-screen w-1/2 bg-gray-100 text-gray-700 shadow-lg ${
					menuClosed && "-translate-x-full transition duration-200 ease-in"
				} ${menuOpen && "transition duration-200 ease-in"} `}>
				<ul className='flex flex-col space-y-4 text-base mt-5'>
					<div className='flex items-center space-x-2 ml-5'>
						<HomeIcon className='h-6 p-1 border-2  rounded-full' />
						<li
							className=''
							onClick={() => {
								`${router.push("/")} ${setMenuOpen(!menuOpen)} ${setMenuClosed(
									!menuClosed
								)}`;
							}}>
							Home
						</li>
					</div>
					<div className='border-b-2 border-white' />
					<div className='flex items-center space-x-2 ml-5'>
						<BookOpenIcon className='h-6 p-1 border-2  rounded-full' />
						<li
							className=''
							onClick={() => {
								`${router.push("/about")} ${setMenuOpen(
									!menuOpen
								)} ${setMenuClosed(!menuClosed)}`;
							}}>
							About
						</li>
					</div>
					<div className='border-b-2 border-white' />
					<div className='flex items-center space-x-2 ml-5'>
						<PhoneIcon className='h-6 p-1 border-2 rounded-full' />
						<li
							className=''
							onClick={() => {
								`${router.push("/contact")} ${setMenuOpen(
									!menuOpen
								)} ${setMenuClosed(!menuClosed)}`;
							}}>
							Contact
						</li>
					</div>
					<div className='border-b-2 border-white' />
				</ul>
			</nav>
		</header>
	);
};

export default Header;
