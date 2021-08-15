import React from 'react';
import './index.css';

export const Message = ({text}) =>
(
	<div className="message">
		<div className="text">
			{text}
		</div>
	</div>
);