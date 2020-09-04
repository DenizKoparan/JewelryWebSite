import React from 'react';
import Rainbow from '../hoc/Rainbow';
import './Watches.css';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {NavLink ,withRouter}  from 'react-router-dom';




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
				
                <div className='nnn'><img src={require("./kolimg/1k.jpg")} ></img>
                <div onClick={shoot} id='p' className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                    <a class="ui teal tag label">100$</a>
                </div>
                </div>
                 </div>
                <div className='nnn'><img src={require("./kolimg/2k.jpg")}></img>
                <div onClick={shoot} id='w'class="ui vertical animated button" tabIndex="0">
                <div class="hidden content">Shop</div>
                <div class="visible content">
                    <i class="shop icon"></i>
                    <a class="ui teal tag label">59.90$</a>
                </div>
                </div></div>
                <div className='nnn'><img src={require("./kolimg/3k.jpg")}></img>
                
                <div onClick={shoot} id='c' class="ui vertical animated button" tabIndex="0">
                    <div class="hidden content">Shop</div>
                    <div class="visible content">
                        <i class="shop icon"></i>
                        <a class="ui teal tag label">48$</a>
                    </div>
                    </div></div>
                <div className='nnn'><img src={require("./kolimg/4k.jpeg")}></img>
                
                <div onClick={shoot} id='m' class="ui vertical animated button" tabIndex="0">
                    <div class="hidden content">Shop</div>
                    <div class="visible content">
                        <i class="shop icon"></i>
                        <a class="ui teal tag label">70$</a>
                    </div>
                    </div>
                </div>
                <div   className='nnn'><img src={require("./kolimg/5k.jpeg")}></img>
                <a  id='lab'class="ui red ribbon label">SALE/150$</a>
                <div onClick={shoot} id='d' class="ui vertical animated button" tabIndex="0">
                    <div class="hidden content">Shop</div>
                    <div class="visible content">
                        <i class="shop icon"></i>
                        <a class="ui teal tag label">200.34$</a>
                    </div>
                    </div>
                </div>
                <div className='Al'><NavLink to="/uyelik" className="den">
                <button className='btn red'>COMPLETE THE ORDER</button>
                </NavLink></div>
                {/* <div className='a'>
                    <IconButton aria-label="cart">
					<StyledBadge badgeContent={4} color="secondary">
						<ShoppingCartIcon />
					</StyledBadge>
					</IconButton></div> */}
				
			</div>
            
		</div>
	)
}


export default Rainbow(Necklaces);