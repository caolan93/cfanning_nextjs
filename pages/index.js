import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Caolan Fanning - WebDev</title>

				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<div className='max-w-[1500px] mx-auto '>
				<HeroSection />
				<Technologies />
				<Projects />
			</div>
			<Footer />
		</div>
	);
}
