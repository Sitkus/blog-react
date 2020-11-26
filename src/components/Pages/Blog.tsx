import React, { useContext } from 'react';
import useStyles from './Blog.style';
import PostContext from '../../PostContext';

const Blog = () => {
  const { postName, setPostName } = useContext(PostContext);

  return (
    <div>
      Its a blog, welcome!
    </div>
  );
}

export default Blog;
