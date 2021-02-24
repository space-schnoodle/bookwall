import { database } from '../database/config';

export function startAddingPost(post) {
  return async (dispatch) => {
    try {
      await database.ref('posts').update({ [post.id]: post });
      dispatch(addPost(post));
    } catch (error) {
      console.log(
        'There was an error while adding the post to firebase:',
        error
      );
    }
  };
}

export function startLoadingPosts() {
  return async (dispatch) => {
    // Observes database once
    try {
      const snapshot = await database.ref('posts').once('value');
      let posts = [];
      snapshot.forEach((element) => {
        posts.push(element.val());
      });
      dispatch(loadPosts(posts));
    } catch (error) {
      console.log('There was an error while loading post', error);
    }
  };
}

export function startRemovingPost(index, id) {
  /* this specifies the paths that we want to update to null 
   (basically delete)
   we're navigating to the post with id we clicked remove on, 
   as well as the comments belonging to that post, with 
   that same id. 
   */
  const updates = {
    [`posts/${id}`]: null,
    [`comments/${id}`]: null,
  };

  return async (dispatch) => {
    /*finally, we're updating the database from its root node, such
    that it navigates to the posts path, as well as the comments
    path, and  sets them to null ! (in other words, deletes both
    of them). 
    After deleting the post and its comments from the database,
    like always, we're updating
    the ui by dispatching an action to our reducer 
    inside of .then() */
    try {
      await database.ref().update(updates);
      dispatch(removePost(index));
    } catch (error) {
      console.log('There was an error while removing post', error);
    }
  };
}

export function startAddingComment(comment, postId) {
  return (dispatch) => {
    return database
      .ref(`comments/${postId}`)
      .push(comment)
      .then(() => {
        dispatch(addComment(comment, postId));
      })
      .catch((error) => {
        console.log('There was an error while adding post', error);
      });
  };
}

export function startLoadingComments() {
  return (dispatch) => {
    return database
      .ref('comments')
      .once('value')
      .then((snapshot) => {
        let comments = {};
        snapshot.forEach((element) => {
          comments[element.key] = Object.values(element.val());
        });
        dispatch(loadComments(comments));
      });
  };
}

export function loadComments(comments) {
  return {
    type: 'LOAD_COMMENTS',
    comments,
  };
}

export function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index,
  };
}

export function addPost(post) {
  return {
    type: 'ADD_POST',
    post,
  };
}

export function addComment(comment, postId) {
  return {
    type: 'ADD_COMMENT',
    comment,
    postId,
  };
}

export function loadPosts(posts) {
  return {
    type: 'LOAD_POSTS',
    posts,
  };
}
