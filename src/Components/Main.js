import React, { Component } from 'react';
import Title from './Title';
import BookWall from './Bookwall';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
    this.removePhoto = this.removePhoto.bind(this);
  }

  removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemoved),
    }));
  }

  addPhoto(postSubmited) {
    this.setState((state) => ({
      posts: state.posts.concat([postSubmited]),
    }));
  }

  componentDidMount() {
    const data = SimulateFetch();
    this.setState({
      posts: data,
    });
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title title={'Book Recommendation'} />
              <BookWall
                posts={this.state.posts}
                onRemovePhoto={this.removePhoto}
              />
            </div>
          )}
        />

        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto
              onAddPhoto={(addedPost) => {
                console.log(addedPost);
                this.addPhoto(addedPost);
                history.push('/');
              }}
            />
          )}
        />
      </div>
    );
  }
}

function SimulateFetch() {
  return [
    {
      id: 0,
      description: '1984',
      imageLink:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2usBAFGfTETSguzZydYnAeEmr416hnMy0oQ&usqp=CAU',
    },
    {
      id: 1,
      description: 'Foundation',
      imageLink:
        'https://i.pinimg.com/originals/d7/41/bf/d741bf6bde37e8202ec98c2361875140.jpg',
    },
    {
      id: 2,
      description: 'Brave New World!',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg',
    },
  ];
}

export default Main;
