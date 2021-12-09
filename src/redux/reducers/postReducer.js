import ACTIONS from '../actions';

const initialState = {
  modal: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TAGMODAL:
      return {
        ...state,
        modal: true,
      };
    default:
      return state;
  }
};
export default postReducer;
