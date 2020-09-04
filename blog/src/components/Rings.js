import React from 'react';
import Rainbow from '../hoc/Rainbow';
import './Rings.css';
import Badge from '@material-ui/core/Badge';
import {NavLink ,withRouter}  from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// const StyledBadge = withStyles((theme) => ({
// 	badge: {
// 	  right: -3,
// 	  top: 13,
// 	  border: `2px solid ${theme.palette.background.paper}`,
// 	  padding: '0 4px',
// 	},
//   }))(Badge);
  function shoot() {
	alert("Added to cart...");
  }
  const myelement = (
	<button onClick={shoot}>ADD TO CART</button>
  );


const Rings = (props) => {
	// console.log(props);
	// setTimeout(() => {
	// 	  props.history.push("/about");
	// 	}, 2000);

	return (
		<div>
			<div className="container">
				
				<div className='aaa'><img src={require("./yüzükimg/1y.jpeg")}></img>
				<div onClick={shoot} id='r1' className="ui vertical animated button" tabindex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                    <a class="ui teal tag label">2.500$</a>
                </div>
                </div></div>
                <div className='aaa'><img src={require("./yüzükimg/2y.jpeg")}></img>
				<div onClick={shoot} id='r2' className="ui vertical animated button" tabindex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                    <a class="ui teal tag label">2.500$</a>
                </div>
                </div></div>
                <div className='aaa'><img src={require("./yüzükimg/3y.jpg")}></img>
				<a  id='l3'class="ui red ribbon label">SALE/1.450$</a>
				<div onClick={shoot} id='r3' className="ui vertical animated button" tabindex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                    <a class="ui teal tag label">2.500$</a>
                </div>
                </div></div>
                <div className='aaa'><img src={require("./yüzükimg/4y.jpeg")}></img>
				<div onClick={shoot} id='r4' className="ui vertical animated button" tabindex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                    <a class="ui teal tag label">2.500$</a>
                </div>
                </div></div>
                <div className='aaa'><img src={require("./yüzükimg/5y.jpg")}></img>
				<a  id='l5'class="ui red ribbon label">SALE/1.450$</a>
				<div onClick={shoot} id='r5' className="ui vertical animated button" tabindex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                    <a class="ui teal tag label">2.500$</a>
                </div>
                </div></div>
                {/* <div className='a'> <IconButton aria-label="cart">
					<StyledBadge badgeContent={4} color="secondary">
						<ShoppingCartIcon />
					</StyledBadge>
					</IconButton></div> */}
                     <div className='Al'><NavLink to="/uyelik" className="den">
                <button className='btn red'>COMPLETE THE ORDER</button>
                </NavLink></div>
			</div>
		</div>
	)
}


export default Rainbow(Rings);