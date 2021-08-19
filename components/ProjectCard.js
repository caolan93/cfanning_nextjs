import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Collapse from "@material-ui/core/Collapse";

import { ChevronDownIcon } from "@heroicons/react/solid";

const ProjectCard = ({
	title,
	descriptionStart,
	descriptionFull,
	link,
	image,
}) => {
	const [readMore, setReadMore] = useState(false);

	return (
		<div className='px-3 py-6 justify-between relative bg-pink-200 shadow-lg rounded-lg md:m-0 flex flex-col space-y-6 max-w-lg'>
			<div className='text-center p-2 font-semibold text-lg bg-white rounded-lg shadow-md'>
				{title}
			</div>
			<div className='bg-white rounded-lg shadow-md p-2 flex flex-col space-y-4'>
				<div className='relative h-[150px] w-[200px] mt-5 mx-auto'>
					<Image
						className='rounded-lg'
						src={image}
						height={800}
						width={1200}
						layout='responsive'
						objectFit='contain'
						alt={title}
					/>
				</div>
				<div>
					<p>{descriptionStart}</p>

					<Collapse in={readMore} unmountOnExit>
						<p>{descriptionFull}</p>
					</Collapse>
				</div>
				<div className='justify-self-center self-center'>
					<a href={link} target='_blank' rel='noopener'>
						<button className=' text-white hover:bg-gray-900 px-3 py-2  rounded-md bg-blue-400 transition-all active:scale-95 ease-out duration-100'>
							View Project
						</button>
					</a>
					<button
						onClick={() => setReadMore(!readMore)}
						className={`absolute bottom-[12px] right-[12px] px-3 py-6 ${
							readMore ? "" : "animate-pulse"
						}`}>
						{readMore ? (
							<ChevronDownIcon className='rotate-180 h-5  bg-gray-600 rounded-md text-white transition-all duration-300 ease-in' />
						) : (
							<ChevronDownIcon className='h-5 bg-gray-600 rounded-md text-white transition-all duration-300 ease-in' />
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
