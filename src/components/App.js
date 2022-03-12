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

import { Experience, Projects } from '../data';
function App() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className='flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20'>
			{/* Navigation Bar */}
			<nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center'>
				<div className='w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center'>
					<p className='text-lg text-slate-200 font-medium'>Amir Ali</p>
					<div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
						<a
							href='#home'
							className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
							Home
						</a>
						<a
							href='#about'
							className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
							About
						</a>
						<a
							href='#skills'
							className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
							Skills
						</a>
						<a
							href='#projects'
							className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
							Projects
						</a>
						<a
							href='#contact'
							className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
							Contact
						</a>
						<a
							href={resume}
							download
							className='ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in'>
							Download Resume
						</a>
					</div>
					<div
						className='block md:hidden ml-auto cursor-pointer text-2xl text-textBase'
						onClick={() => setIsActive(!isActive)}>
						<IoMenu className='text-2xl text-textBase' />
					</div>
					{isActive && (
						<div className='p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6'>
							<a
								href='#home'
								className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
								onClick={() => setIsActive(false)}>
								Home
							</a>
							<a
								href='#about'
								className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
								onClick={() => setIsActive(false)}>
								About
							</a>
							<a
								href='#skills'
								className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
								onClick={() => setIsActive(false)}>
								Skills
							</a>
							<a
								href='#projects'
								className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
								onClick={() => setIsActive(false)}>
								Projects
							</a>
							<a
								href='#contact'
								className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
								onClick={() => setIsActive(false)}>
								Contact
							</a>
							<a
								href='https://github.com/Amir-A-23/dev-portfolio/blob/main/src/assets/images/Amir-Resume.pdf'
								className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in'
								onClick={() => setIsActive(false)}>
								Download Resume
							</a>
						</div>
					)}
				</div>
			</nav>
			<div className='relative' id='home'>
				<Spline scene='https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline' />
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
			<main className='w-[80%] mt-4'>
				{/* About Section */}
				<section
					className='w-full grid grid-cols-1 md:col-span-4 gap-4 mt-2 mb-24'
					id='about'>
					{/* image box */}
					<div className='w-full h-210 flex items-center justify-center'>
						<div class='avatar'>
							<div class='w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
								<img src={amir} alt='' />
							</div>
						</div>
					</div>
					{/* content box */}
					<div className='w-full h-210 flex flex-col items-center justify-center'>
						<p className='text-lg text-textBase text-center'>
							Hi! I'm Amir, a passionate and enthusiastic full stack web
							developer based in Toronto, Canada. I have a passion for
							developing tools that simplifies and benefits peoples lives. I
							love gaming, music, mixed media art, and fintech.
						</p>
					</div>
				</section>

				{/* timeline section */}
				<section
					className='w-full flex items-center justify-center'
					id='skills'>
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
									iconStyle={{ background: 'rgb(21, 24, 21)', color: '#888' }}
									icon={n.iconsSrc}>
									<h3 className='vertical-timeline-element-title'>{n.title}</h3>
									<h4 className='vertical-timeline-element-subtitle'>
										{n.location}
									</h4>
									<p>{n.badges}</p>
								</VerticalTimelineElement>
							))}
					</VerticalTimeline>
				</section>
				{/* Projects */}
				<section
					className='flex flex-wrap items-center justify-evenly my-24 gap-4'
					id='projects'>
					{Projects &&
						Projects.map((n, i) => (
							<div
								key={n.id}
								className='border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>
								<p className='text-lg text-textBase font-medium uppercase'>
									{n.name}
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
										<div>
											<IoLogoGithub className='text-textBase text-3xl cursor-pointer' />
										</div>
									</a>
								</div>
							</div>
						))}
				</section>
			</main>
		</div>
	);
}

export default App;
