import React, { Component } from 'react';
import BookWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Single from './Single';
import { Route, Link } from 'react-router-dom';

class Main extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>
          <Link to="/"> Photowall </Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <BookWall {...this.props} />
            </div>
          )}
        />

        <Route path="/AddPhoto" render={() => <AddPhoto {...this.props} />} />
        <Route
          path="/single/:id"
          render={(params) => <Single {...this.props} {...params} />}
        />
      </div>
    );
  }
}

export default Main;
