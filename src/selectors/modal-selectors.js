import {createSelector} from 'reselect';

const getIsModalShow = state => state.modalReducer.isModalShow;
export const isModalShowSelector = createSelector(
  getIsModalShow,
  isModalShow => isModalShow
)




