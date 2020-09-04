import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pokeball from './aaajpg.jpg';
import {connect} from 'react-redux';
import './Home.css';


class Home extends Component {
	
	

	render() {
		const { posts } = this.props
		const postList = posts.length ? (
			posts.map(post => {
				const logo= post.img;
				return (
					<div className="post card" key={post.id}>
						
						
						<div className="card-content">
						<div className="blk" style={{display: 'flex', alignItems:'center'}}>
								<img src={logo} alt="" style={{display:'inline-block'}}/>
								<Link to={'/'+post.id}>
								<span className="card-title red-text">
									{post.title}
								</span>
								</Link>
							</div>
							<p>{post.body}</p>
							
							
						</div>
					</div>
				)

			})

		) : (
				<div className="center">
					No Post to show
				</div>
			);
		return (
			<div>
				<div className="home container">
					
					{postList}
				</div>
				
			</div>
		)
	}

}

const mapStateToProps = (state) =>
{
	return {
		posts:state.posts
	}
}


export default connect(mapStateToProps)(Home);