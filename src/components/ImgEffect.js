import React from 'react';

export default function ImgEffect(props) {

	return (
		<div className={`img-effect${props.imgEffect ? ' effect-playing' : ''}`}>
			<div className="effect">&nbsp;</div>
		</div>
	);
}
