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
		<div className='px-3 py-6 justify-between relative bg-gray-400 rounded-lg mx-3 my-10 md:m-0 flex flex-col'>
			<div>{title}</div>
			<div>
				<p>{descriptionStart}</p>

				<Collapse in={readMore} unmountOnExit>
					<p>{descriptionFull}</p>
				</Collapse>
			</div>
			<div className='justify-self-center self-center'>
				<a href={link} target='_blank' rel='noopener'>
					<button className='shadow-lg hover:bg-gray-300 my-3 px-3 py-2  rounded-md bg-gray-100 transition-all hover:scale-[1.01] ease-in duration-100'>
						Read More
					</button>
				</a>
				<button
					onClick={() => setReadMore(!readMore)}
					className='absolute bottom-[12px] right-[3px] px-3 py-6'>
					{readMore ? (
						<ChevronDownIcon className='rotate-180 h-5 shadow-lg bg-gray-100  rounded-md text-gray-500 transition-all duration-300 ease-in' />
					) : (
						<ChevronDownIcon className='h-5 shadow-lg bg-gray-100  rounded-md text-gray-500 transition-all duration-300 ease-in' />
					)}
				</button>
			</div>
		</div>
	);
};

export default ProjectCard;
