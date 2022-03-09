import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
function App() {
	return (
		<div class='flex flex-col'>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
