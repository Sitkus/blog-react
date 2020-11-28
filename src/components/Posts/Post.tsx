import React, { useContext } from 'react';
import useStyles from './Post.style';
import PostContext from '../../PostContext';

const Post = () => {
  const { postName, setPostName } = useContext(PostContext);

  return (
    <h1>
      POST HERE
    </h1>
  );
}

export default Post;