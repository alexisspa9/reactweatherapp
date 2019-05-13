import React from 'react';
import Idle from './idle.svg';

function Day() {
	return (
		<div className="day">
			<h5>Monday</h5>
			<span className="date">14.05</span>
			<img src={Idle} alt="alt" />
			<span className="temp">22°C</span>
		</div>
	);
}

export default Day;