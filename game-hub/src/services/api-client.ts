import axios from "axios";

export default axios.create({
  params: {
    key: process.env.RAWG_API_KEY
  },
  baseURL: "https://api.rawg.io/api"
})