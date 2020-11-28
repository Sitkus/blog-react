import { createContext } from 'react';

interface Content {
  heading1: string;
  heading2?: string;
  body1: string[];
  body2?: string[];
}

interface Props {
  postHref: string;
  setPostHref: any;
  posts: PostsProps[];
  setPosts: any;
}

interface PostsProps {
  title: string;
  description: string;
  content: Content;
  image: string;
  href: string;
}

const PostContext = createContext<Props>({ postHref: '', setPostHref: '', posts: [], setPosts: [] });

export default PostContext;