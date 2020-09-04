import React from 'react';
import Rainbow from '../hoc/Rainbow';
import './Watches.css';
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

const Necklaces = (props) => {
	// console.log(props);
	// setTimeout(() => {
	// 	  props.history.push("/about");
	// 	}, 2000);

	return (
		<div>
			<div className="container">
				
                <div className='bbb'><img src={require("./bilimg/1b.jpeg")}></img>
                <div  onClick={shoot} id='B1' className="ui vertical animated button" tabindex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                    <a class="ui teal tag label">100$</a>
                </div>
                </div></div>
                <div className='bbb'><img src={require("./bilimg/2b.jpeg")}></img>
                <div  onClick={shoot} id='B2'class="ui vertical animated button" tabindex="0">
                <div class="hidden content">Shop</div>
                <div class="visible content">
                    <i class="shop icon"></i>
                    <a class="ui teal tag label">59.90$</a>
                </div>
                </div></div>
                <div className='bbb'><img src={require("./bilimg/3b.jpg")}></img>
                <div  onClick={shoot} id='B3'class="ui vertical animated button" tabindex="0">
                <div class="hidden content">Shop</div>
                <div class="visible content">
                    <i class="shop icon"></i>
                    <a class="ui teal tag label">59.90$</a>
                </div>
                </div></div>
                <div className='bbb'><img src={require("./bilimg/4b.jpg")}></img>
                <div onClick={shoot} id='B4'class="ui vertical animated button" tabindex="0">
                <div class="hidden content">Shop</div>
                <div class="visible content">
                    <i class="shop icon"></i>
                    <a class="ui teal tag label">59.90$</a>
                </div>
                </div></div>
                <div  onClick={shoot} className='bbb'><img src={require("./bilimg/5b.jpeg")}></img>
                <div id='B5'class="ui vertical animated button" tabindex="0">
                <div class="hidden content">Shop</div>
                <div class="visible content">
                    <i class="shop icon"></i>
                    <a class="ui teal tag label">59.90$</a>
                </div>
                </div></div>
                {/* <div className='a'>
                    <IconButton aria-label="cart">
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


export default Rainbow(Necklaces);