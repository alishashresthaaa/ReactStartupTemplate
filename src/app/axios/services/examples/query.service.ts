import axiosInstance from "app/axios/instance";

// Request to get all posts
export const getAllPosts = async () => {
  const response = await axiosInstance.get("/posts");
  return response.data;
};

export const getSinglePost = async (id: number) => {
  const response = await axiosInstance.get(`/posts/${id}`);
  return response.data;
};
