import Image from "next/image";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";

import profile from "../public/static/profile.jpg";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const HeroSection = () => {
	const router = useRouter();
	const { ref, inView } = useInView({
		threshold: 0.4,
	});
	const animation = useAnimation();

	const heroAnimation = {
		hide: {
			opacity: 0,
		},
		show: {
			opacity: [0.1, 1],
			transition: { duration: 0.75, type: "ease-in" },
		},
	};

	useEffect(() => {
		if (!inView) {
			animation.start("hide");
		}
		if (inView) {
			animation.start("show");
		}
	}, [inView, animation]);

	return (
		<motion.div
			animate={animation}
			variants={heroAnimation}
			ref={ref}
			className='space-y-10 px-4 flex flex-col md:grid md:grid-cols-2 md:py-12 bg-white pb-[50px]'>
			<div className='flex flex-col justify-center items-center space-y-10'>
				<h1 className='text-5xl mt-[50px] md:mt-0'>Welcome!</h1>
				<p className='text-center max-w-[400px] lg:max-w-[650px]'>
					My name is Caolan Fanning and this is my personal portfolio! I built
					this website to showcase some of my skills as a web developer.
				</p>
				<button
					onClick={() => router.push("/about")}
					className='bg-gray-200 shadow-md text-gray-700 font-bold p-3 lg:p-4 rounded-lg active:bg-gray-300 active:shadow-lg hover:scale-105 transition duration-200 ease-in-out'>
					READ MORE..
				</button>
			</div>

			<div className='rounded-lg relative m-auto h-[350px] w-[280px] md:h-[400px] md:w-[320px] lg:h-[500px] lg:w-[400px]'>
				<Image
					priority
					className='rounded-lg'
					objectFit='contain'
					layout='fill'
					src={profile}
					alt='profile'
				/>
			</div>
		</motion.div>
	);
};

export default HeroSection;
