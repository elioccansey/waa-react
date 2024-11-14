import api from "./api";

const POSTS_BASE_URL = "/posts/"

export const getAllPosts = async () => {
    return api.get(POSTS_BASE_URL).then(response => response.data)
}

export const deletePost = async (id) => {
    return api.delete(POSTS_BASE_URL + id).then(response => response.data);
}

export const getPostById = async (id) => api.get(POSTS_BASE_URL + id).then(res => res.data);
