import { SIGNUPERROR, SIGNUPLOADING, SIGNUPSUCCESS } from "../actionTyes";

const initstate = {
  isLoginLoding: false,
  isLoginError: false,
};

export const reducer = (state = initstate, action) => {
  const { type } = action;

  switch (type) {
    case SIGNUPLOADING:
      return {
        ...state,
        isLoginLoding: true,
        isLoginError: false,
      };
    case SIGNUPSUCCESS:
      return {
        ...state,
        isLoginLoding: false,
        isLoginError: false,
      };

    case SIGNUPERROR:
      return {
        ...state,
        isLoginLoding: false,
        isLoginError: true,
      };
    default:
      return state;
  }
};
