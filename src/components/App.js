import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Spline } from '@splinetool/react-spline';
function App() {
	return (
		<div className='flex w-screen h-screen min-h-screen flex-col item-center justify-center relative bg-primary pb-20'>
			<div className='relative' id='home'>
				<Spline scene='https://draft.spline.design/WcKB7mm1w31uZf7n/scene.spline' />
			</div>
		</div>
	);
}

export default App;
