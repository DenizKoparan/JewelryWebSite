import React from 'react';
import ReactDOM from 'react-dom';
import Rainbow from '../hoc/Rainbow';
import './Watches.css';
import Badge from '@material-ui/core/Badge';
import {NavLink, withStyles } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function shoot() {
	alert("Added to cart ...");
  }
  const myelement = (
	<button onClick={shoot}>ADD TO CART</button>
  );

// const StyledBadge = withStyles((theme) => ({
// 	badge: {
// 	  right: -3,
// 	  top: 13,
// 	  border: `2px solid ${theme.palette.background.paper}`,
// 	  padding: '0 4px',
// 	},
//   }))(Badge);



const Watches = (props) => {
	// console.log(props);
	// setTimeout(() => {
	// 	  props.history.push("/about");
	// 	}, 2000);

	return (
		<div>
			<div className="container">
				
                <div className='sss'><img src={require("./images/1s.jpg")}></img>
				<div  onClick={shoot} id='wat1' className="ui vertical animated button" tabindex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                    <a class="ui teal tag label">2.500$</a>
                </div>
                </div></div>
                <div className='sss'><img src={require("./images/2s.jpg")}></img>
				<div  onClick={shoot} id='wat2' className="ui vertical animated button" tabindex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                    <a class="ui teal tag label">1.090,99$</a>
                </div>
                </div></div>
                <div className='sss'><img src={require("./images/3s.jpg")}></img>
				<div  onClick={shoot} id='wat3' className="ui vertical animated button" tabindex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                    <a class="ui teal tag label">3.000$</a>
                </div>
                </div></div>
                <div className='sss'><img src={require("./images/4s.jpg")}></img>
				<a   onClick={shoot} id='w4'class="ui red ribbon label">SALE/1.500$</a>
				<div  id='wat4' className="ui vertical animated button" tabindex="0">
                <div  className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                    <a class="ui teal tag label">3.500$</a>
                </div>
                </div></div>
                <div className='sss'><img src={require("./images/5s.jpg")}></img>
				<div  onClick={shoot} id='wat5' className="ui vertical animated button" tabindex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                    <a class="ui teal tag label">4.445$</a>
                </div>
                </div></div>
				
				{/* <div className='a'><IconButton aria-label="cart">
					<StyledBadge badgeContent={4} color="secondary">
						<ShoppingCartIcon />
					</StyledBadge>
					</IconButton>
					</div> */}
                    <div className='Al'><NavLink to="/uyelik" className="den">
                <button className='btn red'>COMPLETE THE ORDER</button>
                </NavLink></div>
				
			</div>
			</div>
	)
}


export default Rainbow(Watches);