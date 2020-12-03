import React, { useState, useContext, createContext } from 'react';
import data from './data';

type PostsProviderProps = { children: React.ReactNode };

interface PostHrefContextProps {
  postHref: string;
  setPostHref: any;
}

interface PostsContextProps {
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

interface Content {
  heading: string;
  body: string[];
}

const PostHrefContext = createContext<PostHrefContextProps>({ postHref: '', setPostHref: '' });
const PostsContext = createContext<PostsContextProps>({ posts: [], setPosts: [] });

const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [ postHref, setPostHref ] = useState('');
  const [ posts, setPosts ] = useState(data);

  return (
    <PostHrefContext.Provider value={{ postHref, setPostHref }}>
      <PostsContext.Provider value={{ posts,setPosts }}>
        { children }
      </PostsContext.Provider>
    </PostHrefContext.Provider>
  )
}

const usePostHref = () => {
  return useContext(PostHrefContext);
}

const usePosts = () => {
  return useContext(PostsContext);
}

export { PostsProvider, usePostHref, usePosts };