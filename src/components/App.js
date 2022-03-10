import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Spline } from '@splinetool/react-spline';
function App() {
	return (
		<div className='flex w-screen h-screen min-h-screen flex-col item-center justify-center relative bg-primary pb-20'>
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
				</div>
			</nav>
			<div className='relative' id='home'>
				<Spline scene='https://draft.spline.design/WcKB7mm1w31uZf7n/scene.spline' />
			</div>
		</div>
	);
}

export default App;
