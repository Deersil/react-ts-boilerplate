// import { capitalize } from './utils';
// import { setLocale } from 'yup';

import App from './containers/App';
import configureStore from './store';
import history from './history';
import registerServiceWorker from './registerServiceWorker';
import theme from './theme';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const { store } = configureStore();

// setLocale({
// 	mixed: {
// 		required: ({ path }) => `${capitalize(path)} is required`
// 	},
// 	string: {
// 		min: ({ path, min }) => `${capitalize(path)} has to be longer than ${min} characters!`,
// 		email: ({ path }) => `${capitalize(path)} isn't valid`
// 	}
// });

ReactDOM.render(
	<Router history={history}>
		<Provider store={store}>
			<ThemeProvider theme={theme.styled}>
				<App />
			</ThemeProvider>
		</Provider>
	</Router>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
