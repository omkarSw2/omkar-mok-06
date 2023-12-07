import { SIGNUPERROR, SIGNUPLOADING, SIGNUPSUCCESS } from "../actionTyes";

const initstate = {
  isSignupLoding: false,
  isSignupError: false,
};

export const reducer = (state = initstate, action) => {
  const { type } = action;

  switch (type) {
    case SIGNUPLOADING:
      return {
        ...state,
        isSignupLoding: true,
        isSignupError: false,
      };
    case SIGNUPSUCCESS:
      return {
        ...state,
        isSignupLoding: false,
        isSignupError: false,
      };

    case SIGNUPERROR:
      return {
        ...state,
        isSignupLoding: false,
        isSignupError: true,
      };
    default:
      return state;
  }
};
