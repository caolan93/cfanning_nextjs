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
			<div className='h-full'>
				{/* Left */}
				<div className='flex flex-col'>
					<div className='flex w-[280px] mx-auto'>
						<PhoneIcon className='h-6 mr-10' />
						<p>+(353)-83-177-9545</p>
					</div>
					<div className='border-b text-gray-200 md:hidden ' />
					<div className='flex w-[280px] mx-auto'>
						<MailIcon className='h-6 mr-10' />
						<p>caolan.fanning@gmail.com</p>
					</div>
					<div className='border-b text-gray-200  md:hidden' />
					<div className='flex w-[280px] mx-auto '>
						<LocationMarkerIcon className='h-6 mr-10' />
						<p>D14RC97</p>
					</div>
				</div>

				{/* Right */}
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
