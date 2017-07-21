import * as d3 from 'd3';
import actionTypes from './actionTypes';

export default {
  fetchChartData: () => (dispatch, getState) => {
    // const symbol = selectors.selectTicker(getState());
    const symbol = 'MSFT';

    // refactor this out into an api helper later
    const urlBase = 'https://www.alphavantage.co/query';
    const urlParameters = [
      'function=TIME_SERIES_DAILY_ADJUSTED',
      `symbol=${symbol}`,
      'outputsize=full',
      'apikey=IXLI01A4TZCTHEDJ',
    ];
    const url = `${urlBase}?${urlParameters.join('&')}`;

    dispatch({ type: actionTypes.CHART_FETCH_DATA_START });

    return fetch(url)
      .then(response => response.json())
      .then((data) => {
        /*
          "Time Series (Daily)": {
            "2017-07-19": {
                "1. open": "73.5000",
                "2. high": "74.0400",
                "3. low": "73.4500",
                "4. close": "73.8600",
                "5. adjusted close": "73.8600",
                "6. volume": "21769229",
                "7. dividend amount": "0.0000",
                "8. split coefficient": "1.0000"
            },
          }
         */

        const formattedData = Object.keys(data['Time Series (Daily)']).map(date => {
          return {
            date: new Date(d3.timeParse('%Y-%m-%d')(date).getTime()),
            open: +data['Time Series (Daily)'][date]['1. open'],
            high: +data['Time Series (Daily)'][date]['2. high'],
            low: +data['Time Series (Daily)'][date]['3. low'],
            close: +data['Time Series (Daily)'][date]['5. adjusted close'],
            volume: +data['Time Series (Daily)'][date]['6. volume'],
          };
        });

        // formattedData.columns = [
        //   'date', 'open', 'high', 'low', 'close', 'volume', 'split', 'dividend', 'absoluteChange', 'percentChange',
        // ];

        dispatch({
          type: actionTypes.CHART_FETCH_DATA_SUCCESS,
          payload: formattedData,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

