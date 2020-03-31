import axios from 'axios'




export async function auth(){

	const token = localStorage.getItem('token')

	return axios.create({
	headers:{
	authorization:token
	},
	baseURL:'https://thisguycodez.herokuapp.com'
	})
}

