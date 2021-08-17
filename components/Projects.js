import ProjectCard from "./ProjectCard";

import proshoptn from "../images/proshopThumbnail.png";

const Projects = () => {
	return (
		<div className='grid grid-cols-2'>
			<div>
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
			<div>
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
			<div>
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
			<div>
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
	);
};

export default Projects;
