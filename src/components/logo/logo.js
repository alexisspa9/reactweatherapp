import React from 'react';
import Logo from './logo.svg';

function DisplayLogo() {
	return (
		<div className="logo">
			<img src={Logo} alt="logo" /> 
			<h1>Weather App</h1>
		</div>
	);
}

export default DisplayLogo;