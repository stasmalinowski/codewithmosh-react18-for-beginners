import axios from "axios";

export default axios.create({
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY
  },
  baseURL: "https://api.rawg.io/api"
})