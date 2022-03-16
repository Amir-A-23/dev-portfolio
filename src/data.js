import {
	IoCodeWorking,
	IoMail,
	IoLogoLinkedin,
	IoLogoGithub,
} from 'react-icons/io5';
import helpnetwork from './assets/images/helpnetwork.png';
import scheduler from './assets/images/scheduler.gif';
import portfolio from './assets/images/portfolio.gif';
import tinyapp from './assets/images/tinyapp.png';
import tweeter from './assets/images/tweeter.png';
import pix from './assets/images/pix.gif';
export const Experience = [
	{
		id: 1,
		category: 'LANGUAGES',
		iconsSrc: <IoCodeWorking />,
		badges: 'JavaScript (ES6+), HTML5, CSS3, C, C++, Ruby, SQL',
	},
	{
		id: 2,
		category: 'FRAMEWORKS',
		iconsSrc: <IoCodeWorking />,
		badges:
			'ReactJS, NextJS, NodeJS, Express, Ruby on Rails, Ajax, SASS, Bootstrap3, Tailwind',
	},

	{
		id: 3,
		category: 'SYSTEMS',
		iconsSrc: <IoCodeWorking />,
		badges:
			'PostgreSQL, Prisma ORM, Unreal Engine, Autodesk Maya, Spline Design',
	},

	{
		id: 4,
		category: 'TESTING',
		iconsSrc: <IoCodeWorking />,
		badges: 'Jest, Mocha, Chai, Cypress, Storybook',
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
		name: 'Portfolio Site',
		imageSrc: portfolio,
		techs: 'React, Tailwind, Framer-Motion, Spline.Design, Firebase',
		github: 'https://github.com/Amir-A-23/dev-portfolio',
	},
	{
		id: 4,
		name: 'Appointment Scheduler',
		imageSrc: scheduler,
		techs: 'React, Node, Express, PostgreSQL, SASS, Storybook, Jest, Cypress',
		github: 'https://github.com/Amir-A-23/scheduler',
	},
	{
		id: 5,
		name: 'Tweeter',
		imageSrc: tweeter,
		techs: 'JavaScript, Node, Express, Jquery, Ajax, HTML, CSS',
		github: 'https://github.com/Amir-A-23/tweeter',
	},
	{
		id: 6,
		name: 'TinyApp',
		imageSrc: tinyapp,
		techs: 'JavaScript, EJS, Node, Express, JQuery, Mocha & Chai',
		github: 'https://github.com/Amir-A-23/tinyapp',
	},
];

export const SocialLinks = [
	{
		id: 1,
		iconSrc: <IoMail className='text-textBase text-3xl cursor-pointer' />,
		name: 'Email',
		link: 'mailto:amir.a.23@outlook.com',
	},
	{
		id: 2,
		iconSrc: (
			<IoLogoLinkedin className='text-blue-800 text-3xl cursor-pointer' />
		),
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/amir-ali-ama23',
	},
	{
		id: 3,
		iconSrc: <IoLogoGithub className='text-textBase text-3xl cursor-pointer' />,
		name: 'GitHub',
		link: 'https://github.com/Amir-A-23',
	},
];
