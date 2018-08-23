import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import NavBar from './common/navBar/navBar';
// import theme from './core/theme';

const Home = () => <div>Home</div>;
const Blog = () => <div>Blog</div>;
const Charts = () => <div>Charts</div>;
const Contact = () => <div>Contact</div>;

// @todo: to add/use a theme, import theme.js and pass as prop to MuiThemeProvider
const App = () => {
	return (
    <React.Fragment>
      <CssBaseline>
				<MuiThemeProvider>
					<NavBar title="Comfy Investor"/>
					<Route exact path="/" component={Home}/>
					<Route path="/blog" component={Blog}/>
					<Route path="/charts" component={Charts}/>
					<Route path="/contact" component={Contact}/>
				</MuiThemeProvider>
      </CssBaseline>
    </React.Fragment>
	);
};

// @todo: pass an actual reducer into createStore when ready
const store = createStore(state => state);

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
  document.querySelector('.react-container')
);
