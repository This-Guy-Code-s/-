import {MOVING,MOVED,ERR} from './actions'



const initialState = {
	work:'',
	error:''
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

			case ERR:
			return {
				...state,
				error:action.payload,
			}

			default:
			return state
			
		}







	}