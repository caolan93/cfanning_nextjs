import Head from "next/head";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Courses from "../components/Courses";

export default function Home() {
	const pageAnimation = {
		hidden: {
			opacity: 0,
			y: 300,
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
			},
		},
		exit: {
			opacity: 0,
			y: 300,
		},
	};

	return (
		<div>
			<Head>
				<title>Welcome to my Personal Portfolio Website</title>

				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<motion.div
				variants={pageAnimation}
				initial='hidden'
				animate='show'
				exit='exit'
				className='max-w-[1500px] mx-auto '>
				<HeroSection />
				<Technologies />
				<Projects />
				<Courses />
			</motion.div>
			<Footer />
		</div>
	);
}
