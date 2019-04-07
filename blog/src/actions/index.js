import _ from 'lodash';

import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPostAndUsers = () => {
  return async (dispatch) => {
    console.log('fetching posts');

    await dispatch(fetchPost());

    console.log('fetched posts');
  }
};

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data,
  });
};

// export const fetchUser = (id) => {
//   return async (dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//       type: 'FETCH_USER',
//       payload: response.data,
//     });
//   };
// };

export const fetchUser = (id) => {
  return (dispatch) => {
    _fetchUser(id, dispatch);
  };
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  });
});
