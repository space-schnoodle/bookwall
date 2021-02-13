import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// stateless functions
function BookWall(props) {
  return (
    <div>
      <Link className="add-icon" to="/AddPhoto"></Link>
      <div className="photo-grid">
        {props.posts
          .sort(function (x, y) {
            return y.id - x.id;
          })
          .map((post) => (
            <Photo
              key={post.id}
              post={post}
              onRemovePhoto={props.onRemovePhoto}
            />
          ))}
      </div>
    </div>
  );
}

BookWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};
/*
class BookWall extends Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, index) => (
          <Photo key={index} post={post} />
        ))}
      </div>
    );
  }
}
*/

export default BookWall;
