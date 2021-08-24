import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Image from "next/image";

import brad from "../public/static/brad.jpeg";
import ania from "../public/static/ania.jpeg";
import deved from "../public/static/deved.jpeg";
import sonny from "../public/static/sonny.jpeg";

import youtube from "../public/static/youtube.png";
import udemy from "../public/static/udemy.png";
import stack from "../public/static/stack.png";
import freecodecamp from "../public/static/freecodecamp.png";

const About = () => {
	const animation = useAnimation();
	const { ref, inView } = useInView({});

	const heroAnimation = {
		hide: {
			y: 600,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: [0.1, 1],
			transition: { duration: 0.75, type: "ease-in", bounce: 0.4 },
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

	const teachersArr = [
		{
			name: "Brad Travesy",
			img: brad,
			link: "https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA",
		},
		{
			name: "Ania Kubów",
			img: ania,
			link: "https://www.youtube.com/channel/UC5DNytAJ6_FISueUfzZCVsw",
		},
		{
			name: "Sonny Sangha",
			img: sonny,
			link: "https://www.youtube.com/user/ssangha32",
		},
		{
			name: "Dev Ed",
			img: deved,
			link: "https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q",
		},
	];

	const contentArr = [
		{ name: "Youtube", img: youtube, link: "https://www.youtube.com/" },
		{ name: "Udemy", img: udemy, link: "https://www.udemy.com/" },
		{ name: "StackOverflow", img: stack, link: "https://stackoverflow.com/" },
		{
			name: "FreeCodeCamp",
			img: freecodecamp,
			link: "https://www.freecodecamp.org/",
		},
	];
	return (
		<div className='bg-gray-50'>
			<Header />
			<motion.div
				animate={animation}
				variants={heroAnimation}
				ref={ref}
				className='max-w-[1500px] mx-auto py-[50px] bg-white shadow-lg rounded-lg'>
				<h1 className='text-2xl md:text-4xl my-4 font-bold px-3 md:px-10'>
					About Me..
				</h1>
				<div className='px-3 md:px-10'>
					<p>
						While obtaining my Mathematical Science Degree from T.U.D I attended
						a computer programming module which based around the programming
						language of C++ in my 2nd year of study. <br />
						The module quickly became my favourite lecture in college, but, upon
						completing the year and progressing into the 3rd year of my course I
						was given the disheartening news that the Computer Programming
						module had been removed from my course as not enough students had
						opted to attend the class.
						<br />
						<br />
						After completing my degree in 2020 in conjunction with the Covid-19
						outbreak I found myself with a lot more free time than I was
						expecting with the heavy restrictions both nationally and
						internationally.
						<br />I then made the decision to put my free time to good use and
						took it upon myself to make an effort to get back into programming!
					</p>
				</div>

				<div className='flex flex-grow space-x-2 w-full overflow-x-scroll justify-start px-3 lg:px-0 md:justify-center'>
					{contentArr.map((item) => (
						<div
							key={contentArr.indexOf(item)}
							className='my-6 flex flex-col shadow-lg rounded-lg cursor-pointer md:hover:scale-105 transition-all ease-in-out duration-300'>
							<a href={item.link} target='_blank'>
								<div className='relative h-[200px] w-[200px] lg:h-[250px] lg:w-[250px]'>
									<Image
										layout='fill'
										objectFit='contain'
										className='rounded-t-lg'
										src={item.img}
										alt={item.name}
									/>
								</div>
							</a>

							<h3 className='text-center font-bold text-lg p-3'>{item.name}</h3>
						</div>
					))}
				</div>

				<div className='px-3 md:px-10'>
					<p>
						{" "}
						From reading online, I gathered that a really good place to start as
						a self-taught programming would be with the technologies at the core
						of every web application you visit in your day to day life.
						<br /> These, of course, were the technologies HTML, CSS and
						JavaScript! I found myself learning through a wide variety of
						resources online which ranged from interactive learning websites and
						videos to reading public forums. <br /> Though I found myself
						learning through many different avenues, of course I had my
						favourite avenues of teaching... I feel obligated to share my
						personal favourites as they have helped me so much both on an
						individual basis and collectively in my pursuit to become a
						professional software engineer! <br /> The websites that I found
						helped me the most are; Freecodecamp, Youtube, Udemy and
						Stackoverflow.
						<br />
						<br />
					</p>
				</div>
				<div className=' flex flex-grow space-x-2 overflow-x-scroll justify-start px-3 lg:px-0 md:justify-center'>
					{teachersArr.map((item) => (
						<div
							key={teachersArr.indexOf(item)}
							className=' my-6 flex flex-col shadow-lg rounded-lg cursor-pointer md:hover:scale-105 transition-all ease-in-out duration-300'>
							<a href={item.link} target='_blank'>
								<div className='relative h-[200px] w-[200px] lg:h-[250px] lg:w-[250px]'>
									<Image
										layout='fill'
										objectFit='contain'
										className='rounded-t-lg'
										src={item.img}
										alt={item.name}
									/>
								</div>
							</a>

							<h3 className='text-center font-bold text-lg p-3'>{item.name}</h3>
						</div>
					))}
				</div>

				<div className='px-3 md:px-10'>
					<p>
						On an individual level the online teaches both through their free to
						view videos on Youtube and through some paid courses via their own
						personal websites or Udemy are: DevelopedByEd, TravesityMedia, Sonny
						Sanga, JavaScriptMastery and Anna Konga. <br /> I feel it would be
						ungrateful of me not to mention these creators on an individual
						level as they have helped me (and thousands of others) to reach a
						dream to become a programmer. I have a great passion for learning
						and building projects. I'm focused, driven and I would love an
						opportunity to learn and grow not just as a developer but as a
						person.
						<br />
						<br />
						Thanks for reading!
						<br /> Yours Sincerely, <br /> Caolan.
					</p>
				</div>
			</motion.div>
			<Footer />
		</div>
	);
};

export default About;
