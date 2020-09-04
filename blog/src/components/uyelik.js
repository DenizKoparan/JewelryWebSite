import React from 'react';
import Rainbow from '../hoc/Rainbow';
import { NavLink } from 'react-router-dom';


const uyelik = (props) => {
	// console.log(props);
	// setTimeout(() => {
	// 	  props.history.push("/about");
	// 	}, 2000);

	return (
		<div>
			<div className="container">
				<h1 className="center">LOGİN</h1>
                                <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <NavLink to="/deneme"className="den">
                <button style={{left: 0}}type="submit" class="btn btn-primary">Sign in</button></NavLink>
                <NavLink to="/deniz"className="den">
                <button style={{margin:20}} type="submit" class="btn btn-primary">Sign up</button></NavLink>
                <NavLink to="/deneme"className="den">
                <button type="submit" class="btn red">Continue without sign in</button></NavLink>
                </form>                
                            
      
			</div>
		</div>
	)
}


export default Rainbow(uyelik);