import ProjectCard from "./ProjectCard";

import proshoptn from "../images/proshopThumbnail.png";
import { useState } from "react";

const Projects = () => {
	const [readMore, setReadMore] = useState(false);
	return (
		<div className='flex flex-col md:flex-row overflow-y-scroll max-w-[1500px] mx-auto'>
			<ProjectCard
				title='Proshop'
				image={proshoptn}
				link='https://proshop-mernapp.herokuapp.com/'
				descriptionStart='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
								quae aperiam facere harum minus quo nostrum quam iusto voluptate
								aspernatur, et numquam asperiores doloribus quidem error, alias
								necessitatibus consequatur.'
				descriptionFull='Perspiciatis dignissimos id error
                delectus voluptatem odio rerum odit a quasi enim, tempora ab
                animi reiciendis harum iusto laborum quaerat quia.'
				readMore={readMore}
				setReadMore={setReadMore}
			/>
			<ProjectCard
				title='Proshop'
				image={proshoptn}
				link='https://proshop-mernapp.herokuapp.com/'
				descriptionStart='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
								quae aperiam facere harum minus quo nostrum quam iusto voluptate
								aspernatur, et numquam asperiores doloribus quidem error, alias
								necessitatibus consequatur.'
				descriptionFull='Perspiciatis dignissimos id error
                delectus voluptatem odio rerum odit a quasi enim, tempora ab
                animi reiciendis harum iusto laborum quaerat quia.'
				readMore={readMore}
				setReadMore={setReadMore}
			/>
			<ProjectCard
				title='Proshop'
				image={proshoptn}
				link='https://proshop-mernapp.herokuapp.com/'
				descriptionStart='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
								quae aperiam facere harum minus quo nostrum quam iusto voluptate
								aspernatur, et numquam asperiores doloribus quidem error, alias
								necessitatibus consequatur.'
				descriptionFull='Perspiciatis dignissimos id error
                delectus voluptatem odio rerum odit a quasi enim, tempora ab
                animi reiciendis harum iusto laborum quaerat quia.'
				readMore={readMore}
				setReadMore={setReadMore}
			/>
			<ProjectCard
				title='Proshop'
				image={proshoptn}
				link='https://proshop-mernapp.herokuapp.com/'
				descriptionStart='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
								quae aperiam facere harum minus quo nostrum quam iusto voluptate
								aspernatur, et numquam asperiores doloribus quidem error, alias
								necessitatibus consequatur.'
				descriptionFull='Perspiciatis dignissimos id error
                delectus voluptatem odio rerum odit a quasi enim, tempora ab
                animi reiciendis harum iusto laborum quaerat quia.'
				readMore={readMore}
				setReadMore={setReadMore}
			/>
		</div>
	);
};

export default Projects;
