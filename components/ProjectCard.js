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
		<div className='relative shadow-md flex flex-col bg-white rounded-lg p-4 m-4 space-y-8'>
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

				{/* {
						readMore
							? "transition-all ease-in-out duration-150"
							: "-translate-y-full opacity-0 transition-all ease-in-out duration-150"
					} `} */}
				{readMore && <p>{descriptionFull}</p>}
			</div>

			<button
				className='bg-gray-100 w-[150px] h-[30px] rounded-lg shadow-lg mx-auto'
				onClick={() => router.push(`${link}`)}>
				View Project
			</button>
			<button
				onClick={() => setReadMore(!readMore)}
				className='absolute bottom-[16px] right-[16px]'>
				{readMore ? (
					<ChevronDownIcon className='rotate-180 h-6 transition-all duration-150 ease-in' />
				) : (
					<ChevronDownIcon className='h-6 transition-all duration-150 ease-in' />
				)}
			</button>
		</div>
	);
};

export default ProjectCard;
