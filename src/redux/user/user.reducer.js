import UserActionTyps from "./user.types";

const INITIAL_STATE = {
  currentUser: {
    userId: 0,
    displayName: "",
    email: "",
    joinedDate: "",
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTyps.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
