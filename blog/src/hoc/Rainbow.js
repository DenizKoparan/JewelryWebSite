import React from 'react';


const Rainbow = (WrappedComponenet) => {

	const colours=['red','pink','orange','blue','green','yellow'];
	const randomColour=colours[Math.floor(Math.random()*6)];
	const className=randomColour+'-text';

	return(props) =>(

		<div className={className}>
			<WrappedComponenet {...props}/>
		</div>
	)
}

export default Rainbow;