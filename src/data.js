import { IoCodeWorking } from 'react-icons/io5';
import helpnetwork from './assets/images/helpnetwork.png';
import scheduler from './assets/images/scheduler.gif';
import tinyapp from './assets/images/tinyapp.png';
import tweeter from './assets/images/tweeter.png';
import pix from './assets/images/pix.gif';
export const Experience = [
	{
		id: 1,
		category: 'Languages',
		iconsSrc: <IoCodeWorking />,
		badges:
			'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
	},
	{
		id: 2,
		category: 'Frameworks',
		iconsSrc: <IoCodeWorking />,
		badges:
			'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
	},

	{
		id: 3,
		category: 'Systems',
		iconsSrc: <IoCodeWorking />,
		badges:
			'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
	},

	{
		id: 4,
		category: 'Tools',
		iconsSrc: <IoCodeWorking />,
		badges:
			'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
	},
];

export const Projects = [
	{
		id: 1,
		name: 'Help Network',
		imageSrc: helpnetwork,
		techs: 'NextJS, Node, Express, React-Query, PostgreSQL, Tailwind',
		github: 'https://github.com/mauty/helpnetwork',
	},
	{
		id: 2,
		name: 'Pix: Food Delivery',
		imageSrc: pix,
		techs:
			'Javascript, Node, Express, EJS, JQuery, PostgreSQL, Bootstrap, SASS',
		github: 'https://github.com/aalibarre/pix',
	},
	{
		id: 3,
		name: 'Appointment Scheduler',
		imageSrc: scheduler,
		techs: 'React, Node, Express, PostgreSQL, SASS, Storybook, Jest, Cypress',
		github: '#',
	},
	{
		id: 4,
		name: 'Tweeter',
		imageSrc: tweeter,
		techs: 'Javascript, Node, Express, Jquery, Ajax, HTML, CSS',
		github: '#',
	},
	{
		id: 5,
		name: 'TinyApp',
		imageSrc: tinyapp,
		techs: 'Javascript, EJS, Node, Express, JQuery, Mocha & Chai',
		github: '#',
	},
];
