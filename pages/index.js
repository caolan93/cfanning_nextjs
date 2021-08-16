import Head from "next/head";

import Header from "../components/Header";
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
			<HeroSection />
			<Technologies />
			<Projects />
		</div>
	);
}
