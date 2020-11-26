import { createContext } from 'react';

interface PostProps {
  postName: string;
  setPostName: string | any;
}

const PostContext = createContext<PostProps>({ postName: '', setPostName: '' });

export default PostContext;