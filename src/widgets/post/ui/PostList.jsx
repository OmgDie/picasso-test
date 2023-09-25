import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PostListItem from '../../../entities/post/PostListItem';
import { fetchPosts } from '../../../shared/api/index';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [postCount, setPostCount] = useState(10);
  

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    };

    if (posts.length === 0) {
      loadPosts();
    }
  }, [posts]);

  const handleLoadMore = async () => {
    setPostCount(postCount + 10);
    try {
      const data = await fetchPosts();
      setPosts(data.slice(0, postCount + 10));
    } catch (error) {
      console.error('Error loading more posts:', error);
    }
  };

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={handleLoadMore}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
