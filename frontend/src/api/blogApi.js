import axios from "axios";

const API_URL = "http://localhost:5001/api/blogs";

export const getBlogs = () => {
  return axios.get(API_URL);
};

export const getBlogById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createBlog = (blog) => {
  return axios.post(API_URL, blog);
};

export const updateBlog = (id, blog) => {
  return axios.put(`${API_URL}/${id}`, blog);
};

export const deleteBlog = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
