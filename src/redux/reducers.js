import {LOADING,SUCCESS,BTN,NAVIGATION,MODE,SHOW,ERR} from './actions'
 import logo from '../img/tgc1.png'
import me from '../img/me.png'
import wavio from '../img/wave.png'


 

const initialState = {
	compRendered:sessionStorage.getItem('nav') || 'Home',
	work:'',
	error:'',
	mode:sessionStorage.getItem('toggleDarkMode') && sessionStorage.getItem('toggleDarkMode') === 'true'? true:false,
	show:false,
	me:me,
	logo:logo,
	wavio:wavio,
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
			return {
				...state,
				mode:action.payload,
			}



			case SHOW:
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