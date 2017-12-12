import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';

import store, { fetchCampuses, fetchStudents } from '../store';

class Root extends Component {

  componentDidMount() {
    store.dispatch(fetchCampuses());
    store.dispatch(fetchStudents());
  }

  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/students/:studentId" component={SingleStudent} />
            <Route path="/campuses" component={AllCampuses} />
            <Route path="/students" component={AllStudents} />
            <Redirect to="/campuses" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default Root;