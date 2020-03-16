import { SUCCESS, FAILURE } from '../../constants/action.type';


export const addDataReturnPromise = async (ref, object, actiontype) => {
  await ref
    .add(object)
    .then(() => ({
      type: actiontype,
      payload: {
        status: SUCCESS,
        data: 'pushing data is succesfull',
      },
    }))
    .catch((error) => {
      console.log(error);
      return {
        type: actiontype,
        payload: {
          status: FAILURE,
          data: error,
        },
      };
    });
};

export const updateDataReturnPromise = async (ref, object, actionType) => {
  let data = {};
  try {
    await ref.set(object, { merge: true }).then(() => {
      data = {
        status: SUCCESS,
        message: 'pushing data is succesfull',
      };
    });
    return {
      type: actionType,
      payload: data,
    };
  } catch (error) {
    data = {
      status: FAILURE,
      message: error,
    };
    return {
      type: actionType,
      payload: data,
    };
  }
};

export const fetchAndReturnSnapshot = async (db, actionType) => {
  const data = [];
  try {
    await db.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
    });

    return {
      type: actionType,
      payload: data,
    };
  } catch (error) {
    if (!error.response) {
      throw error;
    } else {
      throw error;
    }
  }
};
