import React, { useState } from 'react';

import { Spline } from '@splinetool/react-spline';
import amir from '../assets/images/amir.jpg';
import resume from '../assets/images/resume.pdf';

import { IoMenu, IoLogoGithub } from 'react-icons/io5';

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Experience, Projects, SocialLinks } from '../data';

import { Link, Element } from 'react-scroll';

import { AnimatePresence, motion } from 'framer-motion';
function App() {
	const [isActive, setIsActive] = useState(false);

	return (
		<AnimatePresence initial={false}>
			<div className='flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20'>
				{/* Navigation Bar */}
				<nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center'>
					<div className='w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center'>
						<p className='text-lg text-slate-200 font-medium'>Amir Ali</p>
						<div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
							<li className='list-none'>
								<Link
									activeClass='active'
									className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
									to='home'
									spy={true}
									smooth={true}
									duration={500}>
									Home
								</Link>
							</li>
							<li className='list-none'>
								<Link
									activeClass='active'
									className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
									to='about'
									spy={true}
									smooth={true}
									duration={500}>
									About
								</Link>
							</li>
							<li className='list-none'>
								<Link
									activeClass='active'
									className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
									to='skills'
									spy={true}
									smooth={true}
									duration={500}>
									Skills
								</Link>
							</li>
							<li className='list-none'>
								<Link
									activeClass='active'
									className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
									to='projects'
									spy={true}
									smooth={true}
									duration={500}>
									Projects
								</Link>
							</li>
							<li className='list-none'>
								<Link
									activeClass='active'
									className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
									to='contact'
									spy={true}
									smooth={true}
									duration={500}>
									Contact
								</Link>
							</li>

							<a
								href={resume}
								download
								className='ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in'>
								Download Resume
							</a>
						</div>
						<motion.div
							whileTap={{ scale: 0.5 }}
							transition={{ type: 'spring' }}
							className='block md:hidden ml-auto cursor-pointer text-2xl text-textBase'
							onClick={() => setIsActive(!isActive)}>
							<IoMenu className='text-2xl text-textBase' />
						</motion.div>
						{isActive && (
							<motion.div
								initial={{ opacitiy: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1.1 }}
								exit={{ opacitiy: 0, scale: 0.5 }}
								transistion={{ delay: '0.1s', type: 'spring' }}
								className='p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6'>
								<Link
									activeClass='active'
									className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
									to='home'
									spy={true}
									smooth={true}
									duration={500}
									onClick={() => setIsActive(false)}>
									Home
								</Link>
								<Link
									activeClass='active'
									className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
									to='about'
									spy={true}
									smooth={true}
									duration={500}
									onClick={() => setIsActive(false)}>
									About
								</Link>
								<Link
									activeClass='active'
									className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
									to='skills'
									spy={true}
									smooth={true}
									duration={500}
									onClick={() => setIsActive(false)}>
									Skills
								</Link>
								<Link
									activeClass='active'
									className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
									to='project'
									spy={true}
									smooth={true}
									duration={500}
									onClick={() => setIsActive(false)}>
									Projects
								</Link>
								<Link
									activeClass='active'
									className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
									to='contact'
									spy={true}
									smooth={true}
									duration={500}
									onClick={() => setIsActive(false)}>
									Contact
								</Link>
								<a
									href='https://github.com/Amir-A-23/dev-portfolio/blob/main/src/assets/images/Amir-Resume.pdf'
									className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in'
									onClick={() => setIsActive(false)}>
									Download Resume
								</a>
							</motion.div>
						)}
					</div>
				</nav>
				<div
					className='w-[80%] flex items-center justify-center relative'
					id='home'>
					<Spline scene='https://draft.spline.design/NFdo0VXLhKzEn6qp/scene.spline' />
					<div className='absolute bottom-10 w-full flex justify-center items-center'>
						<div className='shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl'>
							<p className='text-white'>
								Hello, I'm a full-stack developer from Toronto, Canada!
							</p>
							<span className='animate-wave text-2xl'>👋🏾</span>
						</div>
					</div>
				</div>

				{/* Main sections */}
				<main className='w-[60%] mt-2'>
					{/* About Section */}
					<Element name='about' className='element'>
						<section className='w-full grid grid-cols-1 md:col-span-4 gap-4 mb-24'>
							{/* image box */}
							<div className='w-full h-210 flex items-center justify-center mb-2'>
								<div className='avatar'>
									<div className='w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
										<img src={amir} alt='' />
									</div>
								</div>
							</div>
							{/* content box */}
							<div className='w-full h-210 flex flex-col items-center justify-center'>
								<p className='text-lg text-textBase text-justifiy'>
									Hi! I'm Amir, a passionate and enthusiastic full stack web
									developer based in Toronto, Canada. I have a passion for
									developing tools that simplifies and benefits peoples lives. I
									love gaming, music, mixed media art, and fintech.
								</p>
							</div>
						</section>
					</Element>

					{/* timeline section */}
					<Element name='skills' className='element'>
						<section className='w-full flex items-center justify-center'>
							<VerticalTimeline>
								{Experience &&
									Experience.map((n) => (
										<VerticalTimelineElement
											key={n.id}
											className='vertical-timeline-element--work'
											contentStyle={{
												background: 'rgb(21, 24, 21)',
												color: '#888',
											}}
											contentArrowStyle={{
												borderRight: '7px solid  rgb(21, 24, 21)',
											}}
											date={n.category}
											iconStyle={{
												background: 'rgb(21, 24, 21)',
												color: '#888',
											}}
											icon={n.iconsSrc}>
											{/* <h3 className='vertical-timeline-element-title text-gray-100'>
											{n.title}
										</h3>
										<h4 className='vertical-timeline-element-subtitle text-gray-100'>
											{n.location}
										</h4> */}
											<p className='text-gray-300'>{n.badges}</p>
										</VerticalTimelineElement>
									))}
							</VerticalTimeline>
						</section>
					</Element>

					{/* Projects */}
					<Element name='projects' className='element'>
						<section
							className='flex flex-wrap items-center justify-evenly my-24 gap-4'
							id='projects'>
							{Projects &&
								Projects.map((n, i) => (
									<div
										key={n.id}
										className='border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>
										<p className='text-md text-gray-200 font-medium uppercase'>
											{n.name.length > 25
												? `${n.name.slice(0, 25)}...`
												: n.name}
										</p>
										<img
											src={n.imageSrc}
											alt=''
											className='w-full h-full object-cover rounded-md my-4'
										/>
										<div className='flex flex-1 items-center justify-between'>
											<p className='text-lg text-gray-300'>
												Technologies
												<span className='block text-sm text-gray-500'>
													{n.techs}
												</span>
											</p>

											<a href={n.github} target='_blank' rel='noreferrer'>
												<motion.div whileTap={{ scale: 0.8 }}>
													<IoLogoGithub className='text-textBase text-3xl cursor-pointer hover:text-gray-100' />
												</motion.div>
											</a>
										</div>
									</div>
								))}
						</section>
					</Element>

					{/* Contact Section */}
					<Element name='contact' className='element'>
						<section className='flex flex-col items-center justify-center w-full my-24'>
							<p className='text-2xl text-gray-300 capitalize'>For Contact</p>
							<div className='flex items-center justify-center w-full my-4 flex-wrap gap-4'>
								{SocialLinks &&
									SocialLinks.map((n) => (
										<motion.a
											whileTap={{ scale: 0.8 }}
											key={n.id}
											href={n.link}
											target='_blank'
											rel='noreferrer'
											className='w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
											{n.iconSrc}
											<p className='text-lg text-textBase'>{n.name}</p>
										</motion.a>
									))}
							</div>
						</section>
					</Element>
				</main>
			</div>
		</AnimatePresence>
	);
}

export default App;
