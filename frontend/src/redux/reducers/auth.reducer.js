import { SET_USER_SIGNIN, SET_USER_SIGNOUT } from '../../constants/action.type';

const userAuth = (state = null, action) => {
	switch (action.type) {
		case SET_USER_SIGNIN:
			return action.payload;
		case SET_USER_SIGNOUT:
			console.log(action);
			return action.payload;
		default:
			return state;
	}
};

export { userAuth };
