import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#c3fdff',
			main: '#90caf9',
			dark: '#5d99c6',
			contrastText: '#ffffff',
		},
		secondary: {
			light: '#ffbd45',
			main: '#fb8c00',
			dark: '#c25e00',
			contrastText: '#000000',
		},
	},
});

export default theme;
