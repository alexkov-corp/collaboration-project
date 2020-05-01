import {
  SWITCH_MODAL_SHOW_STATUS
} from '../constants/modal-constants';

export const switchModalShow = isModalShow => {
  return {
    type: SWITCH_MODAL_SHOW_STATUS,
    payload: {isModalShow}
  }
};