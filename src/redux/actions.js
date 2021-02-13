import axios from 'axios'



export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const BTN = 'BTN'

export const NAVIGATION = 'NAVIGATION'


export const MODE = 'MODE'

export const SHOW = 'SHOW'

export const ERR = 'ERR'




//=============================================================================/

export const getMyWork = () => dispatch => {
//get my work that ill be displaying on my page
dispatch({type:LOADING})
axios.get(process.env.REACT_APP_mywork)
.then(res=>{
return dispatch({type:SUCCESS,payload:res.data})

})
.catch(err=>{
return dispatch({type:ERR,payload:err})

})
}


//=============================================================================/
//no dispatch throwing needed , but can be store here for good use of redux aysnc control
export const tog_description = (id) => dispatch =>{
const target = document.querySelector(`#${id}`);
//--------------------------------------------
(/off/i).test(target.getAttribute('class'))?
target.setAttribute('class','fas fa-toggle-on')
:target.setAttribute('class','fas fa-toggle-off');	
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
setTimeout(()=>{

	let view = '#intro'
	document.querySelector(view).scrollIntoView()
},500)
return dispatch({type:NAVIGATION,payload:whereTo})

case 'Projects':
window.sessionStorage.setItem('nav',whereTo)
setTimeout(()=>{

	let view = '#intro-proj'
	document.querySelector(view).scrollIntoView()
},500)
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
window.sessionStorage.setItem('toggleDarkMode',mode)
return dispatch({type:MODE,payload:mode})
}else{ 
window.sessionStorage.setItem('toggleDarkMode',mode)
return dispatch({type:MODE,payload:mode})
}  

}







 
  window.onload=()=>{
    document.addEventListener("contextmenu", (e)=>{
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", (e)=>{
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        disabledEvent(e);
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        disabledEvent(e);
      }
      if (e.keyCode === 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      if (e.ctrlKey && e.keyCode === 85) {
        disabledEvent(e);
      }
      if (e.keyCode === 123) {
        disabledEvent(e);
      }
    }, false);
    const disabledEvent = (e) => {
      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
  };