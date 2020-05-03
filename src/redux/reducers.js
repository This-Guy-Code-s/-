import {MOVING,MOVED,BTN,BTNN,ERR} from './actions'



const initialState = {
	work:'',
	error:'',


	//contact btn name toggle
	btnL:'Contact Me',
	btnLL:'My Services'
}



export const reducer =  (state = initialState, action) =>{
		switch(action.type){
			case MOVING:
			return {
				...state,
			}

			case MOVED:
			return {
				...state,
				work:action.payload,
			}

			case BTN:
			return {
				...state,
				btnL:action.payload,
			}

			case BTNN:
			return {
				...state,
				btnLL:action.payload,
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