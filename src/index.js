import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

function* rootSaga () {
    yield takeEvery('FETCH_LIST', fetchList);
    yield takeEvery('ADD_DATE', postList)
}
// Sagas
function* fetchList () {
    try{
        const response = yield axios.get('/schedule');
        console.log('in fetchList', response);
        yield put({type: 'SET_LIST', payload: response.data})
        console.log('response.data', response.data);
    } catch (error){
        console.log('error in GETTing Dates', error)
    }
}


function* postList (action) {
    console.log('in post');
    try {
      const response = yield axios.post('/schedule', action.payload );
      console.log(response);
      yield put({ type: 'FETCH_LIST'});
    } catch (error) {
      console.log('error', error);
    }
  }

const sagaMiddleware = createSagaMiddleware();


// Reducers
const getTrip = (state=[], action) =>{
    console.log('state', state);
    switch (action.type) {
        case 'SET_LIST':
            return action.payload;
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        getTrip,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);



sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={storeInstance}> <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

