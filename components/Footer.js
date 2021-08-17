import {
	PhoneIcon,
	MailIcon,
	LocationMarkerIcon,
} from "@heroicons/react/solid";

import { VscTwitter, VscGithubInverted } from "react-icons/vsc";

const Footer = () => {
	return (
		<div className='bg-gray-100 px-3'>
			<div className='max-w-[1500px] mx-auto py-[50px] flex flex-col md:grid md:grid-cols-3 md:grid-flow-row-dense'>
				<div className='flex justify-center items-center mt-[20px] md:col-start-1 md:my-auto'>
					<p>Copyright 2021 &#169; Caolan Fanning</p>
				</div>
				<div className='flex flex-col space-y-4 '>
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
					<div className='border-b text-gray-200  md:hidden' />
				</div>
				<div className='md:col-start-3 md:my-auto'>
					<div className='flex justify-center items-center mt-[20px] space-x-4 mb-4'>
						<VscGithubInverted className='text-[35px] ' />
						<VscTwitter className='text-[35px] ' />
					</div>
					<div className='border-b text-gray-200 md:hidden' />
				</div>
			</div>
		</div>
	);
};

export default Footer;
