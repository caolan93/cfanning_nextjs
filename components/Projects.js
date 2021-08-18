import ProjectCard from "./ProjectCard";

import proshoptn from "../images/proshopThumbnail.png";

const Projects = () => {
	return (
		<div className='flex flex-col md:grid md:grid-cols-2 md:my-[50px] '>
			<div className='flex flex-col'>
				<div className='m-2'>
					<ProjectCard
						title='Airbnb Clone'
						image={proshoptn}
						link='https://proshop-mernapp.herokuapp.com/'
						descriptionStart='A mobile responsive Airbnb website clone. This was one of my first times trying out NextJS and TailwindCSS. Here I used static data to render the pages information and data.'
						descriptionFull='Perspiciatis dignissimos id error
                delectus voluptatem odio rerum odit a quasi enim, tempora ab
                animi reiciendis harum iusto laborum quaerat quia.'
					/>
				</div>
				<div className='m-2'>
					<ProjectCard
						title='Hulu Landing Page'
						image={proshoptn}
						link='https://proshop-mernapp.herokuapp.com/'
						descriptionStart='Here I again worked with NextJS and TailwindCSS, but this time I made use of NextJS SSR(Server Side Rendering) to work with TMDB API.'
						descriptionFull='Perspiciatis dignissimos id error
                delectus voluptatem odio rerum odit a quasi enim, tempora ab
                animi reiciendis harum iusto laborum quaerat quia. Perspiciatis dignissimos id error
                delectus voluptatem odio rerum odit a quasi enim, tempora ab
                animi reiciendis harum iusto laborum quaerat quia. Perspiciatis dignissimos id error
                delectus voluptatem odio rerum odit a quasi enim, tempora ab
                animi reiciendis harum iusto laborum quaerat quia.'
					/>
				</div>
			</div>
			<div className='flex flex-col'>
				<div className='m-2'>
					<ProjectCard
						title='Proshop'
						image={proshoptn}
						link='https://proshop-mernapp.herokuapp.com/'
						descriptionStart='This was a follow along course and my first introduction to the MERN Stack and the power of full stack development.'
						descriptionFull='Perspiciatis dignissimos id error
                delectus voluptatem odio rerum odit a quasi enim, tempora ab
                animi reiciendis harum iusto laborum quaerat quia.'
					/>
				</div>
				<div className='m-2'>
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
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
