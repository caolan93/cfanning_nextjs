import Footer from "../components/Footer";
import Header from "../components/Header";

import {
	PhoneIcon,
	MailIcon,
	LocationMarkerIcon,
} from "@heroicons/react/solid";

const Contact = () => {
	return (
		<div>
			<Header />
			<div className='h-full w-full px-3 py-[50px] bg-gray-50'>
				{/* Left */}
				<div className='bg-white shadow-lg flex flex-col md:grid md:grid-cols-2 mx-auto max-w-[1500px] rounded-lg md:space-x-4'>
					<div className='flex flex-col space-y-4 my-[50px] rounded-lg bg-white p-2 lg:p-4 max-w-lg mx-auto '>
						<h1 className='text-4xl md:text-5xl text-center p-4'>
							Contact Details
						</h1>
						<div className='flex flex-col justify-evenly h-[350px]  md:h-full md:w-full'>
							<div className='flex lg:text-xl sm:grid sm:grid-cols-2 w-full mx-auto'>
								<PhoneIcon className='h-6 mr-10' />
								<p>+(353)-83-177-9545</p>
							</div>
							<div className='flex lg:text-xl sm:grid sm:grid-cols-2 w-full mx-auto'>
								<MailIcon className='h-6 mr-10' />
								<p>caolan.fanning@gmail.com</p>
							</div>
							<div className='flex lg:text-xl sm:grid sm:grid-cols-2 w-full mx-auto '>
								<LocationMarkerIcon className='h-6 mr-10' />
								<p>Republic of Ireland, D14RC97.</p>
							</div>
						</div>
					</div>

					{/* Right */}
					<div className=''>
						<form className='flex flex-col space-y-4 my-[50px] rounded-lg bg-white p-2 lg:p-4 max-w-lg mx-auto'>
							<div className='flex flex-col '>
								<label>Full Name</label>
								<input
									className='ring-2 p-2 rounded-lg ring-gray-100 outline-none'
									type='text'
								/>
							</div>
							<div className='flex flex-col'>
								<label>Email</label>
								<input
									className='ring-2 p-2 rounded-lg ring-gray-100 outline-none'
									type='text'
								/>
							</div>
							<div className='flex flex-col'>
								<label>Phone</label>
								<input
									className='ring-2 p-2 rounded-lg ring-gray-100 outline-none'
									type='text'
								/>
							</div>
							<div className='flex flex-col'>
								<label>Message</label>
								<textarea
									rows={10}
									className='ring-2 p-2 rounded-lg ring-gray-100 outline-none'
									type='text'
								/>
							</div>
							<button
								className='bg-gray-200 rounded-lg p-2 outline-none'
								type='submit'>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
