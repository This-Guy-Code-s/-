import {MOVING} from './actions'



const initialState = {
	work:'',
}



export const reducer =  (state = initialState, action) =>{
		switch(action.type){
			case MOVING:
			return {
				...state,
				work:action.payload,
				msg:action.msg
			}

			default:
			return state
			
		}







	}