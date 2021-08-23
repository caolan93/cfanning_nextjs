const Courses = () => {
	return (
		<div className='bg-red-700 text-white py-[50px]'>
			<div className='p-3 mb-4'>
				<h1 className='text-4xl text-center text-bold'>Courses</h1>
				<div className='border border-white w-[55px] sm:border sm:w-[80px] mx-auto rounded-sm' />
				<p className='my-5 text-center font-semibold w-[60%] mx-auto'>
					Below are some of the online courses and lectures I have taken to help
					me on my journey to becoming a professional web developer, as well as
					others I am currently undertaking in order to achieve my goal. I have
					put in many hours of work and self study and welcome the opportunity
					to continue to learn and progress in my devlopment to a professional
					level.
				</p>
			</div>
			<div className='rounded-lg bg-white mx-3 px-3 py-6 text-gray-900 space-y-4'>
				<h1 className='text-2xl font-bold'>Completed Courses</h1>
				<div className='flex flex-col md:grid grid-cols-2'>
					<p>Front End Development Libraries - Certificate.</p>
					<p>www.freecodecamp.org</p>
				</div>
				<div className='flex flex-col md:grid grid-cols-2'>
					<p>JavaScript Algorithms and Data Structures - Certificate.</p>
					<p>www.freecodecamp.org</p>
				</div>
				<div className='flex flex-col md:grid grid-cols-2'>
					<p>The Complete JavaScript Course 2021: From Zero to Expert!</p>
					<p>www.udemy.com/course/the-complete-javascript-course</p>
				</div>
				<div className='flex flex-col md:grid grid-cols-2'>
					<p>Build Responsive Real-World Websites with HTML and CSS</p>
					<p>
						www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3
					</p>
				</div>
				<div className='flex flex-col md:grid grid-cols-2'>
					<p>Advanced CSS and Sass: Flexbox, Grid, Animations and More!</p>
					<p>www.udemy.com/course/advanced-css-and-sass The Complete Node.js</p>
				</div>
				<div className='flex flex-col md:grid grid-cols-2'>
					<p>The Complete Node.js Developer Course (3rd Edition)</p>
					<p>www.udemy.com/course/the-complete-nodejs-developer-course-2</p>
				</div>
				<h1 className='text-2xl font-bold'>Current Courses</h1>
				<div className='flex flex-col md:grid grid-cols-2'>
					<p>Learn Figma: User Interface Design Essentials - UI/UX Design</p>
					<p>
						www.udemy.com/course/learn-figma-user-interface-design-essentials-uiux-design
					</p>
				</div>
				<div className='flex flex-col md:grid grid-cols-2'>
					<p>Typescript: The Complete Developer's Guide</p>
					<p>www.udemy.com/course/typescript-the-complete-developers-guide/</p>
				</div>
			</div>
		</div>
	);
};

export default Courses;
