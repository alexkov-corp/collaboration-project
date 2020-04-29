import {
  INITIAL_STATE,
  CHANGE_MODAL_SHOW_STATUS,
} from "../constants/modal-constants";

const modalReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case CHANGE_MODAL_SHOW_STATUS:
      return {...state, isShowingModal: payload.isShowingModal};
    default: return state;
  }
};

export default modalReducer
