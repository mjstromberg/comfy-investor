import actionTypes from './actionTypes';

const updateChartData = data => ({
  type: actionTypes.CHART_FETCH_DATA_SUCCESS,
  payload: data,
});

export default updateChartData;
