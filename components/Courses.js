import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Courses = () => {
	const { ref, inView } = useInView({
		threshold: 0.2,
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
			className='bg-red-700 text-white py-[50px]'>
			<div className='p-3 mb-4'>
				<h1 className='text-4xl text-center text-bold'>Courses</h1>
				<div className='border border-white w-[55px] sm:border sm:w-[80px] mx-auto rounded-sm' />
				<p className='my-5 text-center font-semibold md:w-[60%] mx-auto'>
					Below are some of the online courses and lectures I have taken to help
					me on my journey to becoming a professional web developer, as well as
					others I am currently undertaking in order to achieve my goal. I have
					put in many hours of work and self study and welcome the opportunity
					to continue to learn and progress in my devlopment to a professional
					level.
				</p>
			</div>
			<div className='rounded-lg bg-white mx-3 px-3 py-6 text-gray-900 space-y-4'>
				<div>
					<h1 className='text-2xl font-bold'>Completed Courses</h1>
					<div className='border w-[220px] border-red-700' />
				</div>
				<div className='flex flex-col md:grid grid-cols-2 md:space-x-2'>
					<p className='font-semibold'>Responsive Web Design - Certificate.</p>
					<a
						className='text-xs md:text-sm italic'
						href='https://www.freecodecamp.org/learn/responsive-web-design/'>
						www.freecodecamp.org/learn/responsive-web-design/
					</a>
				</div>
				<div className='flex flex-col md:grid grid-cols-2 md:space-x-2'>
					<p className='font-semibold'>
						JavaScript Algorithms and Data Structures - Certificate.
					</p>
					<a
						href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'
						className='text-xs md:text-sm italic'>
						www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/
					</a>
				</div>
				<div className='flex flex-col md:grid grid-cols-2 md:space-x-2'>
					<p className='font-semibold'>Front End Libraries - Certificate.</p>
					<a
						className='text-xs md:text-sm italic'
						href='https://www.freecodecamp.org/learn/responsive-web-design/'>
						www.freecodecamp.org/learn/front-end-libraries/
					</a>
				</div>
				<div className='flex flex-col md:grid grid-cols-2 md:space-x-2'>
					<p className='font-semibold'>
						The Complete JavaScript Course 2021: From Zero to Expert!
					</p>
					<a
						href='www.udemy.com/course/the-complete-javascript-course'
						className='text-xs md:text-sm italic'>
						www.udemy.com/course/the-complete-javascript-course
					</a>
				</div>
				<div className='flex flex-col md:grid grid-cols-2 md:space-x-2'>
					<p className='font-semibold'>
						Build Responsive Real-World Websites with HTML and CSS
					</p>
					<a
						href='www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3'
						className='text-xs md:text-sm italic'>
						www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3
					</a>
				</div>
				<div className='flex flex-col md:grid grid-cols-2 md:space-x-2'>
					<p className='font-semibold'>
						Advanced CSS and Sass: Flexbox, Grid, Animations and More!
					</p>
					<a
						href='www.udemy.com/course/advanced-css-and-sass The Complete Node.js'
						className='text-xs md:text-sm italic'>
						www.udemy.com/course/advanced-css-and-sass The Complete Node.js
					</a>
				</div>
				<div className='flex flex-col md:grid grid-cols-2 md:space-x-2'>
					<p className='font-semibold'>
						The Complete Node.js Developer Course (3rd Edition)
					</p>
					<a
						href='www.udemy.com/course/the-complete-nodejs-developer-course-2'
						className='text-xs md:text-sm italic'>
						www.udemy.com/course/the-complete-nodejs-developer-course-2
					</a>
				</div>
				<div>
					<h1 className='text-2xl font-bold'>Current Courses</h1>
					<div className='border w-[185px] border-red-700' />
				</div>
				<div className='flex flex-col md:grid grid-cols-2 md:space-x-2'>
					<p className='font-semibold'>
						Learn Figma: User Interface Design Essentials - UI/UX Design
					</p>
					<a
						href='	www.udemy.com/course/learn-figma-user-interface-design-essentials-uiux-design'
						className='text-xs md:text-sm italic'>
						www.udemy.com/course/learn-figma-user-interface-design-essentials-uiux-design
					</a>
				</div>
				<div className='flex flex-col md:grid grid-cols-2 md:space-x-2'>
					<p className='font-semibold'>
						Typescript: The Complete Developer's Guide
					</p>
					<a
						href='www.udemy.com/course/typescript-the-complete-developers-guide/'
						className='text-xs md:text-sm italic'>
						www.udemy.com/course/typescript-the-complete-developers-guide/
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export default Courses;
