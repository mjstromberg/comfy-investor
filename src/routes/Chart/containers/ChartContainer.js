import { connect } from 'react-redux';
import { getSampleData } from '../modules/chart';
import thunks from '../modules/thunks';
import selectChartData from '../modules/selectors';

import Chart from '../components/Chart';

const mapDispatchToProps = {
  fetchChartData: thunks.fetchChartData,
  getSampleData,
};

const mapStateToProps = state => ({
  data: selectChartData(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
