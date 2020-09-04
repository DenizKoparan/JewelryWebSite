

const initState =
{
	
	posts:
		[
			{ id: 'watches', title: 'Watches ', body:'', img:require('./saat.jpg') },
			{ id: 'Necklaces', title: 'Necklaces', body: '', img:require('./kl.jpg') },
			{ id: 'Bracelets', title: 'Bracelets', body: '', img:require('./bl.jpg') },
			{ id: 'Rings', title: 'Rings', body: '' , img:require('./yz.jpg')},
			{ id: 'Earrings', title: 'Earrings', body: '', img:require('./kp_.jpg') },
			{ id: 'Bags', title: 'Bags', body: '', img:require('./cc.jpg') },
			{ id: 'Shawls', title: 'Shawls', body: '', img:require('./sal.webp') }
		]
}


const rootReducer = (state = initState, action) => {
	// console.log(action);
	if (action.type === 'DELETE_POST') {
		let newPosts = state.posts.filter(post => {
			return post.id !==action.id
		});
		return{
			...state,
			posts:newPosts
		}
	}
	return state;
}

export default rootReducer;