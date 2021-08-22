const Courses = () => {
	return (
		<div className='bg-red-700 text-white py-[50px]'>
			<div className='p-3 mb-4'>
				<h1 className='text-4xl text-center text-bold'>Courses</h1>
				<div className='border-b border-white w-[55px] sm:border sm:w-[80px] mx-auto rounded-sm' />
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
			</div>
		</div>
	);
};

export default Courses;
