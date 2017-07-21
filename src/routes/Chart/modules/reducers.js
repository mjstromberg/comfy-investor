import actionTypes from './actionTypes';

const initialState = {
  data: [],
  isLoading: true,
};

const chartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHART_FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default chartReducer;
