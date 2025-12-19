import axios from "axios";
import useAuth from "../hooks/useAuth";

export const uploadImageToImgBB = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`,
    formData
  );
  return data?.data?.url;
};

// Save or update  user in db
export const saveOrUpdateUser = async (userData) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_server_url}/users`,
    userData
  );
  if (data?.insertedId || data.modifiedCount) {
    console.log("user created in the database successfully");
  }
  return data;
};
