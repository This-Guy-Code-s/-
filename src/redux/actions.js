import axios from 'axios'
export const MOVING = 'MOVING'
export const MOVED = 'MOVED'
export const ERR = 'ERR'





export const getMyWork = () => dispatch => {
//get my work that ill be displaying on my page
	dispatch({type:MOVING})
	axios.get('https://thisguycodez.herokuapp.com/api/myWork')
	.then(res=>{
	dispatch({type:MOVED,payload:res.data.work})

	})
	.catch(err=>{
		dispatch({type:ERR,payload:err})

	})
}


