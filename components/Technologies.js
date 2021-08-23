import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import html from "../images/html.png";
import js from "../images/js.png";
import css from "../images/css.png";
import sass from "../images/sass.png";
import material from "../images/material.png";
import framer from "../images/framer.png";
import nodejs from "../images/nodejs.png";
import express from "../images/express.png";
import mongodb from "../images/mongodb.png";
import github from "../images/github.png";
import react from "../images/react.png";
import redux from "../images/redux.png";

const Technologies = () => {
	const { ref, inView } = useInView({
		threshold: 0.3,
	});

	const animation = useAnimation();
	const heroAnimation = {
		hide: {
			x: -600,
			opacity: 0,
		},
		show: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				type: "spring",
				bounce: 0.2,
				staggerChildren: 0.5,
			},
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

	const logoArr = [
		html,
		js,
		css,
		redux,
		react,
		nodejs,
		express,
		material,
		framer,
		mongodb,
		github,
		sass,
	];
	return (
		<motion.div
			animate={animation}
			variants={heroAnimation}
			ref={ref}
			className='flex flex-col md:grid md:grid-cols-2 py-10 md:py-14 bg-gray-900 text-white '>
			<div className='grid grid-cols-3 min-h-[350px] mb-[50px] md:mb-0'>
				{logoArr.map((logo) => (
					<div
						key={logoArr.indexOf(logo)}
						className='flex justify-center items-center'>
						<div className='bg-white p-3 rounded-full'>
							<div className='relative h-[35px] w-[35px] sm:h-[45px] sm:w-[45px] '>
								<Image
									src={logo}
									alt={logo}
									objectFit='contain'
									layout='fill'
								/>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='mx-auto'>
				<div className='text-center sm:text-left max-w-[500px] mx-3 p-3 bg-white rounded-lg text-gray-700'>
					<p>
						When I began my webdev journey in Summer 2020, I started with the
						basics of HTML, CSS and JavaScript.
						<br />
						<br />
						From there, as I gained confidence and experience, I began to delve
						deeper into front-end development which included my introduction to
						technologies such as SASS and the ReactJS Library.
						<br />
						<br />
						This opened up many new doors on the front-end for me including
						animation libraries like Framer Motion, styled components and most
						recently (which I used for this website) Material UI.
						<br />
						<br />
						As I continue my learning and reseach I've began my journey into
						back-end development with projects using technologies like NodeJS,
						Express and MongoDB.
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Technologies;
