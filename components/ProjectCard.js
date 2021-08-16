import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

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
		<div className='relative shadow-md flex flex-col  bg-white rounded-lg p-4 m-4 space-y-8'>
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
					className={` ${
						readMore ? "inline-flex transition duration-200 ease-in" : "hidden "
					} `}>
					{descriptionFull}
				</p>
			</div>

			<button
				className='bg-gray-100 w-[150px] h-[30px] rounded-lg shadow-lg mx-auto'
				onClick={() => router.push(`${link}`)}>
				View Project
			</button>
			<button
				onClick={() => setReadMore(!readMore)}
				className='absolute bottom-0 right-0 p-5'>
				{readMore ? "up" : "down"}
			</button>
		</div>
	);
};

export default ProjectCard;
