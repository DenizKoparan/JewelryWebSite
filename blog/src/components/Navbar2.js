
import React from 'react';
import {Link,NavLink,withRouter }  from 'react-router-dom';
import './Navbar.css';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
	badge: {
	  right: -3,
	  top: 13,
	  border: `2px solid ${theme.palette.background.paper}`,
	  padding: '0 4px',
	},
  }))(Badge);

 class Navbar extends React.Component {
    render() {
        return (
            <div style={{}}className="nav-wrapper"> 
				<a href="#" className="brand-logo">{/*<img src={require("./aaajpg.jpg")}/>*/}Jewelry Search
				<div id='input' className="ui category search">
					<div className="ui icon input">
						
						<input onChance={this.handleClick} className="prompt" type="text" placeholder="Search......"/>
						
						<i className="search icon"></i>
					</div>
					<div className="results"></div>
					</div></a>
				
				<ul id="nav-mobile" className="right hide-on-med-and-down">
				
				<li><IconButton aria-label="cart">
					<StyledBadge badgeContent={4} color="secondary">
						<ShoppingCartIcon />
					</StyledBadge>
					</IconButton></li>
					<li><Link to="/">Home</Link></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
					
					




				</ul>
			</div>
        )
    }
}
export default  withRouter(Navbar);