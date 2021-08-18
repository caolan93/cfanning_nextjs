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
		<div
			className={`relative shadow-lg flex flex-col justify-between bg-[rgb(189,174,173)] rounded-lg p-4 m-4 space-y-8 max-w-[500px] mx-auto ${
				readMore
					? "h-[700px] transition-height transform duration-300 ease-in"
					: "h-[500px] transition-height transform duration-300 ease-in"
			}`}>
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

				<p
					className={
						readMore
							? "transition-all opacity-1 ease duration-200 h-auto"
							: "h-0 opacity-0 transition-all ease duration-200"
					}>
					{descriptionFull}
				</p>
			</div>

			<div className='mx-auto '>
				<button
					className='bg-gray-100 w-[150px] h-[40px] rounded-lg shadow-lg  hover:scale-105 transition transform ease-in duration-150'
					onClick={() => router.push(`${link}`)}>
					View Project
				</button>
				<button
					onClick={() => setReadMore(!readMore)}
					className='absolute bottom-[20px] right-[20px] '>
					{readMore ? (
						<ChevronDownIcon className='rotate-180 h-6 transition-all duration-[300ms] ease-in ' />
					) : (
						<ChevronDownIcon className='h-6 transition-all duration-[300ms] ease-in ' />
					)}
				</button>
			</div>
		</div>
	);
};

export default ProjectCard;
