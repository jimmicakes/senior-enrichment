import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

export * from './reducers/campuses';
export * from './reducers/students';
export * from './reducers/addCampus';
export * from './reducers/addStudent';
export * from './reducers/updateStudent';
export * from './reducers/updateCampus';