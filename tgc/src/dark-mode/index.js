


export default const darkMode = () =>{
	const mode = document.querySelector('.mode')

	if(localStorage.getItem('modeIs')){
		if(localStorage.getItem('modeIs')==='light'){
			mode.classList.remove('light-mode')
			mode.classList.remove('dark-mode')
			localStorage.setItem('modeIs','dark')
	}else if(localStorage.getItem('modeIs')==='dark'){
			mode.classList.remove('dark-mode')
			mode.classList.remove('light-mode')
			localStorage.setItem('modeIs','light')
	}
	}else{
			mode.classList.remove('light-mode')
			mode.classList.remove('dark-mode')
			localStorage.setItem('modeIs','dark')
	}
		

}