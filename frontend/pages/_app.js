import React, { useEffect, useState } from 'react';
import "../styles/globals.css";
import { useSelector, Provider } from 'react-redux';

//userSlice
import { createSlice } from '@reduxjs/toolkit';

//store
import { configureStore } from '@reduxjs/toolkit';

//
const ReduxProvider = ({ children, reduxStore }) => (
	<Provider store={reduxStore}>{children}</Provider>
)

function getLocalStorage() {
	if (typeof window !== "undefined") {
		return localStorage.getItem('user');
	}
	/*const [data, setData] = useState(null)
  
	useEffect(() => {
	  setData(localStorage.getItem('user'))
	}, ([]))
  
	return data*/
}

const userSlice = createSlice({
	name: 'user',
	initialState: {
		value: {
			id: '',
			name: '',
			email: '',
			age: 0
		}
	},
	reducers: {
		changeUser: (state, action) => {
			state.value = action.payload;
		}
	}
});

const { changeUser } = userSlice.actions;

const selectUser = state => state.user.value;

export const store = configureStore({
	reducer: {
		user: userSlice.reducer
	}
});

//

const App = ({ Component, pageProps }) => {
	//const user = useSelector(selectUser);
	//useEffect(() => {
	//	localStorage.setItem('user', JSON.stringify(user));
	//}, [user]);
    const getLayout = Component.getLayout || ((page) => page);
	return <Provider store={store}>
       {getLayout(<Component {...pageProps} />)}
  	</Provider>
	//const getLayout = Component.getLayout || ((page) => page);
	//return (getLayout(<Component {...pageProps} />))
};

export default App

/*import React, { useEffect, useState} from 'react';
import "../styles/globals.css";
import { useSelector, Provider} from 'react-redux';

//userSlice
import { createSlice } from '@reduxjs/toolkit';

//store
import { configureStore } from '@reduxjs/toolkit';

//

function getLocalStorage() { 
  const [data, setData] = useState({})

  useEffect(() => {
	setData(localStorage.getItem('user'))
  }, ([]))

  return data
}

const userSlice = createSlice({
	name: 'user',
	initialState: {
		value: JSON.parse(getLocalStorage()) || {
			id: '',
			name: '',
			email: '',
			age: 0
		}
	},
	reducers: {
		changeUser: (state, action) => {
			state.value = action.payload;
		}
	}
});

const { changeUser } = userSlice.actions;

const selectUser = state => state.user.value;

//export { userSlice, changeUser, selectUser };

store = configureStore({
	reducer: {
		user: userSlice.reducer
	}
});

//

const App = ({ Component, pageProps }) => {
  const user = useSelector(selectUser);
  useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);
  const getLayout = Component.getLayout || ((page) => page);
  return (
	<Provider store={store}>
	  getLayout(<Component {...pageProps} />);
	</Provider>
  )
};

export default App */
