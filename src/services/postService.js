import api from "./api";

const POSTS_BASE_URL = "/posts/"

export const getAllPosts = async () => api.get(POSTS_BASE_URL).then(res => res.data)

export const deletePost = async (id) => api.delete(POSTS_BASE_URL + id).then(res => res.data);

export const getPostById = async (id) => api.get(POSTS_BASE_URL + id).then(res => res.data);

export const addPost = async(post) => api.post(POSTS_BASE_URL, post).then(res => res.data)

export const updatePost = async(id, post) => api.put(POSTS_BASE_URL + id, post).then(res => res.data)