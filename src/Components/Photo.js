import React from 'react';
import PropTypes from 'prop-types';

function Photo(props) {
  return (
    <figure className="figure">
      <img
        className="photo"
        src={props.post.imageLink}
        alt={props.post.description}
      />
      <figcaption>
        <p>{props.post.description}</p>
      </figcaption>
      <div className="button-container">
        <button
          className="button"
          onClick={() => {
            props.onRemovePhoto(props.post);
          }}
        >
          Remove{' '}
        </button>
      </div>
    </figure>
  );
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

/*
class Photo extends Component {
  render() {
    const post = this.props.post;
    return (
      <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description} />
        <figcaption>
          <p>{post.description}</p>
        </figcaption>
        <div className="button-container">
          <button> Remove </button>
        </div>
      </figure>
    );
  }
}
*/

export default Photo;
