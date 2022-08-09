import { COMMENTS } from "app/axios/apis/example";
import axiosInstance from "app/axios/instance";

// Request to get all comments with page and size
export const getAllComments = async (page: number, size: number) => {
  console.log("page", page, "size", size);
  const response = await axiosInstance.get(
    `${COMMENTS}?_start=${page * size}&_limit=${size}`
  );

  return response.data;
};
