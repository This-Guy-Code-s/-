import axios from 'axios'

export const MOVING = 'MOVING'





export const getMyWork=()=>{
	axios.get('https://thisguycodez.herokuapp.com/api/myWork')
	.then(res=>{
		console.log(res)
	})
}