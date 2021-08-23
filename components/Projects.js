import ProjectCard from "./ProjectCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import proshoptn from "../images/proshopThumbnail.png";
import huluThumbail from "../images/huluThumbnail.png";
import airbnbThumbail from "../images/airbnbThumbnail.png";
import portfolio from "../images/portfolio.png";

const Projects = () => {
	const { ref, inView } = useInView({
		threshold: 0.2,
	});
	const animation = useAnimation();

	const heroAnimation = {
		hide: {
			x: -600,
			opacity: 0,
		},
		show: {
			x: "0",
			opacity: 1,
			transition: {
				duration: 0.75,
				type: "spring",
				bounce: 0.2,
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

	return (
		<motion.div
			animate={animation}
			variants={heroAnimation}
			ref={ref}
			className='flex flex-col md:grid md:grid-cols-2 md:py-12 bg-white py-10'>
			<div className='flex flex-col mx-auto'>
				<div className='m-2'>
					<ProjectCard
						title='Airbnb Clone'
						image={airbnbThumbail}
						link='https://airbnb-nextjs-clone.vercel.app/'
						descriptionStart={`A mobile responsive Airbnb website clone. This was one of my first times trying out NextJS and TailwindCSS. Here I used static data to render the pages information and data. `}
						descriptionFull={`While building this app I was able to explore TailwindCSS and NextJS together. It was my first time using both technologies.  Through building this project I learned about TailwindCSS and it's mobile first styling methods and utility classes. I had a lot of fun working with NextJS and it's built in functions such as routing and the image components. Working with static information gave me an insight into the power of server side rendering. I deployed the site using Vercel.`}
					/>
				</div>
				<div className='m-2'>
					<ProjectCard
						title='Hulu Landing Page'
						image={huluThumbail}
						link='https://hulu-clone-sigma-seven.vercel.app/'
						descriptionStart='Here I again worked with NextJS and TailwindCSS, but this time I made use of NextJS SSR (Server Side Rendering) to work with TMDB API.'
						descriptionFull='Using themoviedb.org API I used their data to build a HULU hompage.I used Axios for the data fetching for this project. Using TailwindCSS I was able to style the application in order for it to resememble the HULU app. I used the built-in NextJS router function for page navagition at the click of the movie genre tabs to coincide with dynamically rendering those movie genres from the API. I used Vercel to host my application. '
					/>
				</div>
			</div>
			<div className='flex flex-col mx-auto'>
				<div className='m-2'>
					<ProjectCard
						title='Proshop'
						image={proshoptn}
						link='https://proshop-mernapp.herokuapp.com/'
						descriptionStart='This was a follow along course and my first introduction to the MERN Stack and the power of full stack development.'
						descriptionFull='Building this app I was able to get first hand experience with backend programming. It is something I hope to one day master. I used NodeJS, Express and MongoDB for the server. I got experience with middleware and authentication through webtokens. On the client-side I used ReactJS library and React Bootstrap pre-built components for styling. I deployed the site using Heroku.'
					/>
				</div>
				<div className='m-2'>
					<ProjectCard
						title='Portfolio Website'
						image={portfolio}
						link='https://proshop-mernapp.herokuapp.com/'
						descriptionStart='This is my own personal portfolio website. I built it using the ReactJS framework NextJS. Once again I used TailwindCSS for the styling as I find it amazing to built responsive websites.'
						descriptionFull='In order to give a full stack application feel, I used a package call EmailJS in order to achieve a fully functioning contact form. This package allows me to contact my personal email account to my portfolio website with the need for a backend and database. I used the Framer Motion package for the animations. I also am using a shared account on Hostinger to host my domain.'
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default Projects;
