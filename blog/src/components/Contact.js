import React from 'react';
import Rainbow from '../hoc/Rainbow';


const Contact = (props) => {
	// console.log(props);
	// setTimeout(() => {
	// 	  props.history.push("/about");
	// 	}, 2000);

	return (
		<div>
			<div className="container">
				<h4 className="center">Contact</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit sint eius obcaecati dolor qui, ducimus assumenda veniam odio, omnis dolorum! Quo unde excepturi quasi atque? Nobis quos minus unde!</p>
			</div>
		</div>
	)
}


export default Rainbow(Contact);