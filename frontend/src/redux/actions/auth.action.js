// import { SET_USER_SIGNIN, SET_USER_SIGNOUT } from '../../constants/action.type';


// function login(email, password) {
// 	firebase.auth().signInWithEmailAndPassword(email, password).then((u) => {}).catch((error) => {});
// }

// function signup(email, password) {
// 	firebase.auth().createUserWithEmailAndPassword(email, password).then((u) => {}).catch((error) => {
// 		alert(error);
// 	});
// }

// const setUserSignin = (email) => {
// 	return {
// 		type: SET_USER_SIGNIN,
// 		payload: email
// 	};
// };

// const setUserSignout = () => {
// 	firebase
// 		.auth()
// 		.signOut()
// 		.then(function() {
// 			return {
// 				type: SET_USER_SIGNOUT,
// 				payload: null
// 			};
// 		})
// 		.catch(function(error) {
// 			return {
// 				type: SET_USER_SIGNOUT,
// 				payload: error
// 			};
// 		});
// };

