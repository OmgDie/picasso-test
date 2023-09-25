import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

const fetchPostById = async (postId) => {
    try {
      const response = await axios.get(`${BASE_URL}/posts/${postId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching post with id ${postId}:`, error);
      throw error;
    }
  };
  

  

export { fetchPosts, fetchPostById };
