/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';

import campuses from './campuses';
import students from './students';
import newCampus from './addCampus';
import newStudent from './addStudent';

const rootReducer = combineReducers({
  campuses,
  students,
  newCampus,
  newStudent
});


export default rootReducer;
