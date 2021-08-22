const Courses = () => {
	return (
		<div className='bg-red-700 text-white py-[50px]'>
			<div className='p-3 mb-4'>
				<h1 className='text-4xl text-center text-bold'>Courses</h1>
				<div className='border-b border-white w-[55px] sm:border sm:w-[80px] mx-auto rounded-sm' />
			</div>
			<div className='rounded-lg bg-white mx-3 px-3 py-6 text-gray-900 space-y-4 flex flex-col justify-center items-center'>
				<div>
					<p>This is a course I completed.</p>
				</div>
				<div>
					<p>This is a course I completed.</p>
				</div>
				<div>
					<p>This is a course I completed.</p>
				</div>
				<div>
					<p>This is a course I completed.</p>
				</div>
				<div>
					<p>This is a course I completed.</p>
				</div>
			</div>
		</div>
	);
};

export default Courses;
