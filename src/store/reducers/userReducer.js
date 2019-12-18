/* import INGREDIENTS from '../../data/ingredients' */
import * as options from '../actions';

const initialState = {
	user: {},
	notifications : []
}

const userReducer = ( state = initialState, action) => {

	switch(action.type){
		case options.setAll:
			return{
				ingredients : action.ingredients,
				totalPrice: action.totalPrice
			}

		case options.add:
			break;
		/* 	return add(state, action.key ) */
		default:
			return state;
	}
}


export default userReducer;