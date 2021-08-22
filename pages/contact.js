import { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

import {
	PhoneIcon,
	MailIcon,
	LocationMarkerIcon,
} from "@heroicons/react/solid";

import emailjs from "emailjs-com";

const Contact = () => {
	const USER_ID = process.env.USER_ID;
	const SERVICE_ID = process.env.SERVICE_ID;
	const TEMPLATE_ID = process.env.TEMPLATE_ID;

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [emailSuccess, setEmailSuccess] = useState(false);
	const [emailFailure, setEmailFailure] = useState(false);

	const templateParams = {
		name,
		phone,
		email,
		message,
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
			(result) => {
				setEmailSuccess(true);
				setEmailFailure(true);
				setName("");
				setPhone("");
				setEmail("");
				setMessage("");
			},
			(error) => {
				setEmailSuccess(false);
				setEmailFailure(true);
			}
		);
	};
	return (
		<div className='bg-gray-50'>
			<Header />
			<div className='flex flex-col my-[50px] md:grid md:grid-cols-2 bg-white shadow-lg rounded-lg mx-3 max-w-7xl lg:mx-auto'>
				{/* Left */}
				<div className='flex flex-col '>
					<h1 className='text-center text-2xl md:text-4xl p-3'>
						Contact Details
					</h1>
					<div className='flex flex-col h-[350px] md:h-auto w-full md:flex-grow justify-around max-w-md mx-auto'>
						<div className='grid grid-cols-3'>
							<PhoneIcon className='h-6 lg:h-8 col-span-1 mx-auto' />
							<p className='col-span-2 lg:text-2xl'>+353-83-177-9545</p>
						</div>
						<div className='grid grid-cols-3'>
							<MailIcon className='h-6 lg:h-8  col-span-1 mx-auto' />
							<p className='col-span-2 lg:text-2xl'>caolan.fanning@gmail.com</p>
						</div>
						<div className='grid grid-cols-3'>
							<LocationMarkerIcon className='h-6 lg:h-8  col-span-1 mx-auto' />
							<p className='col-span-2 lg:text-2xl'>
								D14RC97, Rep. of Ireland.
							</p>
						</div>
					</div>
				</div>

				{/* Right */}
				<div className='pb-[50px]'>
					<h1 className='text-center text-2xl md:text-4xl p-3'>Get In Touch</h1>
					<form className='flex flex-col space-y-4 px-3 mt-4 max-w-md mx-auto'>
						<div className='flex flex-col space-y-1'>
							<label className='pl-2'>Full Name</label>
							<input
								className='ring-2 ring-gray-100 rounded-lg p-2 outline-none'
								type='text'
								value={name}
								name='name'
								placeholder='Name'
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className='flex flex-col space-y-1'>
							<label className='pl-2'>Email</label>
							<input
								className='ring-2 ring-gray-100 rounded-lg p-2 outline-none'
								type='email'
								name='email'
								placeholder='Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className='flex flex-col space-y-1'>
							<label className='pl-2'>Phone</label>
							<input
								className='ring-2 ring-gray-100 rounded-lg p-2 outline-none'
								type='number'
								name='phone'
								placeholder='Phone'
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
						<div className='flex flex-col space-y-1'>
							<label className='pl-2'>Message</label>
							<textarea
								className='ring-2 ring-gray-100 rounded-lg p-2 outline-none'
								type='text'
								name='message'
								rows='8'
								placeholder='Message'
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</div>
						<button
							onClick={sendEmail}
							className='h-10 bg-gray-200 rounded-lg hover:bg-gray-300 active:scale-95 transition-all duration-150 ease-in'>
							Send
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
