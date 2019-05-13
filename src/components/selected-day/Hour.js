import React from 'react';
import Idle from '../day/idle.svg';

function Hour() {
	return (
		<div className="specific-hour">
			<span className="hour">00:00</span>
			<img src={Idle} alt="alt" />
			<span className="temp">22°C</span>
		</div>
	);
}

export default Hour;