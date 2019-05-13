import React from 'react';
import Image from './search.svg';

function UserInput() {
	return (
		<div className="user-input">
			<input type="text" />
			<button className="userSubmit"><img src={Image} alt="search icon" /></button>
		</div>
		);
}

export default UserInput;