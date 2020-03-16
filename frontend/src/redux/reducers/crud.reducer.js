import { FETCH_SERVICES } from '../../constants/action.type';
// ================================= Service Reducer =================================
const allServices = (state = null, action) => {
	switch (action.type) {
		case FETCH_SERVICES:
			return action.payload;
		default:
			return state;
	}
};

export { allServices };
