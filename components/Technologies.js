import Image from "next/image";

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
		<div className='max-w-[1500px] h-[600px] mx-auto flex flex-col md:grid md:grid-cols-2 '>
			<div className='grid grid-cols-3 items-center '>
				{logoArr.map((logo) => (
					<div className='relative mb-3 h-[35px] w-[35px] md:h-[45px] md:w-[45px] mx-auto'>
						<Image
							key={logoArr.indexOf(logo)}
							src={logo}
							alt={logo}
							objectFit='contain'
							layout='fill'
						/>
					</div>
				))}
			</div>
			<div className='px-3 my-auto text-center md:text-left'>
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
	);
};

export default Technologies;
