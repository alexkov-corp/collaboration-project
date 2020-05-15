import {
  INITIAL_STATE,
  SWITCH_MODAL_SHOW_STATUS,
} from "../constants/modal-constants";

const modalReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case SWITCH_MODAL_SHOW_STATUS:
      return {...state, isModalShow: payload.isModalShow};

    default:
      return state;
  }
};

export default modalReducer;
