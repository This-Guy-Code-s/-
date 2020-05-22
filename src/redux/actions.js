import axios from 'axios'
import styled from 'styled-components'
import bg from '../img/bg6.jpg'
import mbg from '../img/bg6mobile.jpg'


export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const BTN = 'BTN'

export const NAVIGATION = 'NAVIGATION'


export const MODE = 'MODE'

export const SHOW = 'SHOW'

export const ERR = 'ERR'



 export let APP_COMP = styled.div`
flex:1;
-webkit-text-align: center;
text-align: center;
background-color:#0C0032;
overflow-x:hidden;
overflow-y:auto;
background-position:center;
-moz-background-size:cover;
-webkit-background-size:cover;
background-size:cover;

  `


   if(window.sessionStorage.getItem('toggleDarkMode') === null){
   APP_COMP = styled.div`
flex:1;
-webkit-text-align: center;
text-align: center;
background-color:#0C0032;
overflow-x:hidden;
overflow-y:auto;
background-image:url(${window.innerWidth<=500?bg:mbg});
background-position:center;
-moz-background-size:cover;
-webkit-background-size:cover;
background-size:cover;

  `
  
					

        }else if(window.sessionStorage.getItem('toggleDarkMode') !== null && window.sessionStorage.getItem('toggleDarkMode') !== 'true'){

        	   APP_COMP = styled.div`
flex:1;
-webkit-text-align: center;
text-align: center;
background-color:#0C0032;
overflow-x:hidden;
overflow-y:auto;
background-image:url(${window.innerWidth<=500?bg:mbg});
background-position:center;
-moz-background-size:cover;
-webkit-background-size:cover;
background-size:cover;

  `

        }else{ 
          APP_COMP = styled.div`
flex:1;
-webkit-text-align: center;
text-align: center;
background-color:#0C0032;
overflow-x:hidden;
overflow-y:auto;
background-image:url('');
background-position:center;
-moz-background-size:cover;
-webkit-background-size:cover;
background-size:cover;
 
  `

}



//=============================================================================/

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

//=============================================================================/


export const changeBtnLabel = label => dispatch =>{

			return dispatch({type:BTN,payload:label})
}

//=============================================================================/

export const navBar = whereTo => dispatch =>{
				switch(whereTo){
					case 'Home':
					window.sessionStorage.setItem('nav',whereTo)
					return dispatch({type:NAVIGATION,payload:whereTo})

					case 'Projects':
					window.sessionStorage.setItem('nav',whereTo)
					return dispatch({type:NAVIGATION,payload:whereTo})

					default:
					return false
				}
}
//=============================================================================/

export const showOrNot = choice => dispatch =>{
				return dispatch({type:SHOW,payload:!choice})
}

//=============================================================================/
export const DarkMode = mode => dispatch =>{
     if(mode){
              APP_COMP = styled.div`
flex:1;
-webkit-text-align: center;
text-align: center;
background-color:#0C0032;
overflow-x:hidden;
overflow-y:auto;
background-image:url('');
background-position:center;
-moz-background-size:cover;
-webkit-background-size:cover;
background-size:cover;

  `
  
					window.sessionStorage.setItem('toggleDarkMode',mode)

  return dispatch({type:MODE,payload:mode})
        }else{ 
          APP_COMP = styled.div`



flex:1;
-webkit-text-align: center;
text-align: center;
background-color:#0C0032;
overflow-x:hidden;
overflow-y:auto;
background-image:url(${window.innerWidth<=500?bg:mbg});
background-position:center;
-moz-background-size:cover;
-webkit-background-size:cover;
background-size:cover;
 
  `
					window.sessionStorage.setItem('toggleDarkMode',mode)

  return dispatch({type:MODE,payload:mode})
}  
 
}
