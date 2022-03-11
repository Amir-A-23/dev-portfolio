import React, { useState } from 'react';

import { Spline } from '@splinetool/react-spline';
import amir from '../assets/images/amir.jpg';
import { IoMenu, IoCodeWorking } from 'react-icons/io5';

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function App() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className='flex w-screen min-h-screen flex-col item-center justify-center relative bg-primary pb-20'>
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
							href='#'
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
								href='#'
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
				<div className='absolute bottom-10 w-full justify-center items-center flex'>
					<div className='shadow-md p-4 flex items-center justify-center background-color: rgba(255, 255, 255, 0.08) rounded-3xl'>
						<p className='text-textBase'>
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
					className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24'
					id='about'>
					{/* image box */}
					<div className='w-full h-420 flex items-center justify-center'>
						<div className='w-275 h-340 relative bg-emerald-200 rounded-md'>
							<img
								className='w-full h-full absolute -right-4 top-4 object-cover rounded-lg'
								src={amir}
								alt=''
							/>
						</div>
					</div>
					{/* content box */}
					<div className='w-full h-420 flex flex-col items-center justify-center'>
						<p className='text-lg text-textBase text-center'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</section>
				{/* timeline section */}
				<sections className='w-full flex items-center justify-center'>
					<VerticalTimeline>
						<VerticalTimelineElement
							className='vertical-timeline-element--work'
							contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
							contentArrowStyle={{
								borderRight: '7px solid  rgb(33, 150, 243)',
							}}
							date='2011 - present'
							iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
							icon={<IoCodeWorking />}>
							<h3 className='vertical-timeline-element-title'>
								Creative Director
							</h3>
							<h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
							<p>
								Creative Direction, User Experience, Visual Design, Project
								Management, Team Leading
							</p>
						</VerticalTimelineElement>
					</VerticalTimeline>
				</sections>
				{/* Skills section */}
				<section id='skills'>Technical Skills:</section>
			</main>
		</div>
	);
}

export default App;
