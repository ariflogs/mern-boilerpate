import { OPEN_DIALOG, CLOSE_DIALOG } from '../../constants/action.type';

const dialogController = (state = false, action) => {
	switch (action.type) {
		case OPEN_DIALOG:
			return action.payload;
		case CLOSE_DIALOG:
			return action.payload;
		default:
			return state;
	}
};

export { dialogController };
