import { createContext } from 'react';

interface PostProps {
  postHref: string;
  setPostHref: any;
  posts: PostsProps[];
  setPosts: any;
}

interface PostsProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const PostContext = createContext<PostProps>({ postHref: '', setPostHref: '', posts: [], setPosts: [] });

export default PostContext;