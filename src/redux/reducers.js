import {LOADING,SUCCESS,BTN,NAVIGATION,ERR} from './actions'


const initialState = {
	compRendered:localStorage.getItem('nav') || 'Home',
	work:'',
	error:'',
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

			case ERR:
			return {
				...state,
				error:action.payload,
			}

			default:
			return state
			
		}







	}