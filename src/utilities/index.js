import axios from "axios";

// Save or update  user in db
export const saveOrUpdateUser = async (userData) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_server_url}/user`,
    userData
  );
  return data;
};
