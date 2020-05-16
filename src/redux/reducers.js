import {LOADING,SUCCESS,BTN,NAVIGATION,MODE,SHOW,ERR} from './actions'
 

const initialState = {
	compRendered:localStorage.getItem('nav') || 'Home',
	work:'',
	error:'',
	mode:localStorage.getItem('toggleDarkMode') && localStorage.getItem('toggleDarkMode') === 'true'? true:false,
	show:false,
	//contact btn name toggle
	btnL:'Contact Me'
}



export const reducer =  (state = initialState, action) =>{
		switch(action.type){
			case LOADING:
			return {
				...state,
			}

			case SUCCESS:
			return {
				...state,
				work:action.payload,
			}

			case BTN:
			return {
				...state,
				btnL:action.payload,
			}

			case NAVIGATION:
			return {
				...state,
				compRendered:action.payload,
			}

			case MODE:
	console.log('mode in reducer',action.payload)
			return {
				...state,
				mode:action.payload,
			}



			case SHOW:
	console.log('mode in reducer',action.payload)
			return {
				...state,
				show:action.payload,
			}
			

			case ERR:
			return {
				...state,
				error:action.payload,
			}

			default:
			return state
			
		}







	}