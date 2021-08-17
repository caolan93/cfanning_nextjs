import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/solid";

const ProjectCard = ({
	title,
	descriptionStart,
	descriptionFull,
	link,
	image,
}) => {
	const router = useRouter();

	const [readMore, setReadMore] = useState(false);

	return (
		<div className='relative shadow-md flex flex-col flex-grow bg-white rounded-lg p-4 m-4 space-y-8 '>
			<h1>{title}</h1>
			<Image
				src={image}
				alt={title}
				height={100}
				width={100}
				objectFit='contain'
			/>
			<div>
				<p>{descriptionStart}</p>
			</div>

			<button
				className='bg-gray-100 w-[150px] h-[40px] rounded-lg shadow-lg mx-auto hover:scale-105 transition transform ease-in duration-150'
				onClick={() => router.push(`${link}`)}>
				View Project
			</button>
			<button
				onClick={() => setReadMore(!readMore)}
				className='absolute bottom-[16px] right-[16px]'>
				{readMore ? (
					<ChevronDownIcon className='rotate-180 h-6 transition-all duration-[300ms] ease-in ' />
				) : (
					<ChevronDownIcon className='h-6 transition-all duration-[300ms] ease-in animate-pulse' />
				)}
			</button>
		</div>
	);
};

export default ProjectCard;
