import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPostById } from '../../../shared/api/index';
import { HOME } from '../../../shared/utils/consts';
import '../../../app/styles/postDescription.scss';

const PostDescription = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await fetchPostById(postId);
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const handleNavigateBack = () => {
    navigate(HOME);
  };

  return (
    <div className="post-description">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={handleNavigateBack}>Назад</button>
    </div>
  );
};

export default PostDescription;
