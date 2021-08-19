import Image from "next/image";
import { useRouter } from "next/router";

import profile from "../images/profile.jpg";

const HeroSection = () => {
	const router = useRouter();

	return (
		<div className=' space-y-10 px-4 flex flex-col md:grid md:grid-cols-2 md:py-12 shadow-lg bg-white '>
			<div className='flex flex-col justify-center items-center space-y-10 '>
				<h1 className='text-5xl mt-[50px] md:mt-0'>Welcome!</h1>
				<p className='text-center max-w-[400px] lg:max-w-[650px]'>
					My name is Caolan Fanning and this is my personal portfolio! I built
					this website to showcase some of my skills as a web developer. Enjoy
					your stay!
				</p>
				<button
					onClick={() => router.push("/about")}
					className='bg-gray-100 shadow-md text-gray-700 font-bold p-3 lg:p-4 rounded-lg active:bg-gray-200 active:shadow-lg hover:scale-105 transition duration-200 ease-in-out'>
					READ MORE..
				</button>
			</div>
			<div className='relative mx-auto  md:h-[500px] md:w-[300px] h-[500px] w-[250px]'>
				<Image src={profile} layout='fill' objectFit='contain' alt='profile' />
			</div>
		</div>
	);
};

export default HeroSection;
