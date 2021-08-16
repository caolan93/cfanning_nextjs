import Image from "next/image";
import { useRouter } from "next/router";

import profile from "../images/profile.jpg";

const HeroSection = () => {
	const router = useRouter();
	return (
		<div className='mt-[50px] mb-[50px] space-y-10 px-4 flex flex-col md:grid md:grid-cols-2 max-w-[1500px] mx-auto'>
			<div className='flex flex-col justify-center items-center space-y-10 '>
				<h1 className='text-5xl'>Welcome!</h1>
				<p className='text-center'>
					My name is Caolan Fanning and this is my personal portfolio! I built
					this website to showcase some of my skills as a web developer. Enjoy
					your stay!
				</p>
				<button
					onClick={() => router.push("/about")}
					className='bg-gray-100 shadow-md text-gray-700 font-bold w-[150px] h-[40px] rounded-lg active:bg-gray-200 active:shadow-lg hover:scale-95 transition duration-100 ease-in-out'>
					READ MORE..
				</button>
			</div>
			<div className='mx-auto'>
				<Image
					src={profile}
					layout='fixed'
					objectFit='contain'
					height='600px'
					width='300px'
					alt='profile'
				/>
			</div>
		</div>
	);
};

export default HeroSection;
