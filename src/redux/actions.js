import axios from 'axios'
export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const BTN = 'BTN'

export const NAVIGATION = 'NAVIGATION'

export const ERR = 'ERR'


export const getMyWork = () => dispatch => {
//get my work that ill be displaying on my page
	dispatch({type:LOADING})
	axios.get(process.env.REACT_APP_mywork)
	.then(res=>{
	dispatch({type:SUCCESS,payload:res.data.work})

	})
	.catch(err=>{
		dispatch({type:ERR,payload:err})

	})
}



export const changeBtnLabel = label => dispatch =>{

			return dispatch({type:BTN,payload:label})
}


export const navBar = whereTo => dispatch =>{
				switch(whereTo){
					case 'Home':
					window.localStorage.setItem('nav',whereTo)
					return dispatch({type:NAVIGATION,payload:whereTo})

					case 'Projects':
					window.localStorage.setItem('nav',whereTo)
					return dispatch({type:NAVIGATION,payload:whereTo})

					default:
					return false
				}
}

