// import React, { Component } from 'react';
// import {Link,NavLink,withRouter }  from 'react-router-dom';
// import './Navbar.css';
// import IconButton from '@material-ui/core/IconButton';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import Badge from '@material-ui/core/Badge';
// import { withStyles } from '@material-ui/core/styles';
// import { useSelect } from 'react-select-search';




// const StyledBadge = withStyles((theme) => ({
// 	badge: {
// 	  right: -3,
// 	  top: 13,
// 	  border: `2px solid ${theme.palette.background.paper}`,
// 	  padding: '0 4px',
// 	},
//   }))(Badge);
  

// const Navbar = (props) => {
		
// 	console.log(props.id);
// // 	console.log(props);
// // setTimeout(() =>
// // 	{
// // 		props.history.push('/about');
// // 	},3000);

// 	return (
// 		<nav>
			
// 			 <div style={{}}className="nav-wrapper"> 
// 				<a href="#" className="brand-logo">{/*<img src={require("./aaajpg.jpg")}/>*/}Jewelry Search
				
// 					{/* <div id='input'class="field">
// 					<label>State</label>
// 					<select class="ui fluid dropdown">
// 						<option value="">Search......</option>
// 					<option value="AL">Watches</option>
// 					<option value="AK">Necklaces</option>
// 					<option value="AZ">Bracelets</option>
// 					<option value="AR">Rings</option>
				
					
// 					</select>
// 					</div> */}
					
// 				 <div id='input' className="ui category search">
// 					<div className="ui icon input">
						
// 						<input onChange={Navbar.bind(this)} className="prompt" type="text" placeholder={"Search......"}/>
						
						
// 						<i className="search icon"></i>
// 					</div>
// 					<div className="results"></div>
// 					</div> </a>
				
// 				<ul id="nav-mobile" className="right hide-on-med-and-down">
				
// 				<li><IconButton aria-label="cart">
// 					<StyledBadge badgeContent={4} color="secondary">
// 						<ShoppingCartIcon />
// 					</StyledBadge>
// 					</IconButton></li>
// 					<li><Link to="/">Home</Link></li>
// 					<li><NavLink to="/about">About</NavLink></li>
// 					<li><NavLink to="/contact">Contact</NavLink></li>
					
					




// 				</ul>
// 			</div>
// 		</nav>
		

// 	)
// }

// export default withRouter(Navbar);
import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import {Link, NavLink} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

class Navibar extends React.Component {
    state = {
        searchText: ""
    };

    handleRoute = route => () => {
        this.props.history.push({ pathname: route });
    };

    handleSearchInput = event => {
        this.setState({
            searchText: event.target.value
        });
    };

    handleSearchSubmit = () => {
        if (this.state.searchText) {
            let text = this.state.searchText;
            this.setState({ searchText: "" })
            this.props.history.push({
                pathname: "/results",
                state: { searchText: text }
            });
        } else {
            alert("Please enter some search text!");
        }
    };

    handleSearchKeyUp = event => {
        event.preventDefault();
        if (event.key === 'Enter' && event.keyCode === 13) {
            this.handleSearchSubmit();
        }
    }

    handleFormSubmit = e => e.preventDefault();


    
    render() {

        const StyledBadge = withStyles((theme) => ({
            badge: {
              right: -3,
              top: 13,
              border: `2px solid ${theme.palette.background.paper}`,
              padding: '0 4px',
            },
          }))(Badge);
          
        return (
            <Navbar >
                <div className="nav-wrapper">
				<a href="/" className="brand-logo">Jewelry</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
					<Form inline onSubmit={this.handleFormSubmit}>
                        <FormControl
                            onChange={this.handleSearchInput}
                            value={this.state.searchText}
                            onKeyUp={this.handleSearchKeyUp}
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                    </Form>
					</li>
					<li>
						<Link to="/cart"><IconButton aria-label="cart">
						<StyledBadge badgeContent={4} color="secondary">
							<ShoppingCartIcon />
						</StyledBadge>
						</IconButton>
						</Link>
					</li>
					<li><Link to="/">Home</Link></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
					
				</ul>
			</div>
            </Navbar>
        );
    }
}

export default withRouter(Navibar);