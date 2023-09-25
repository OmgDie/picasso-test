import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DESCRIPTION } from '../../shared/utils/consts';
import '../../app/styles/postListItem.scss';

const PostListItem = ({ post }) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`${DESCRIPTION}/${post.id}`);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-item">
      <span>{post.id}</span>
      <h3>{post.title}</h3>
      <p>{post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}</p>
      <button onClick={handleViewClick}>Просмотр</button>
    </div>
  );
};

export default PostListItem;
