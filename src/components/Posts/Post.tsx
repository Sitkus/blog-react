import React, { useContext } from 'react';
import useStyles from './Post.style';
import PostContext from '../../contexts/PostContext';

const Post = () => {
  const { postHref, setPostHref, posts, setPosts } = useContext(PostContext);

  return (
    <>
      {
        posts.map((post, index) => (
          post.href === postHref ? 
          <h1 key={index}>{post.title}</h1> :
          null
        ))
      }
    </>
  );
}

export default Post;