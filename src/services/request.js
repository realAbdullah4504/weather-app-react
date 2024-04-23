import axios from "axios";

const serverApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default serverApi;
