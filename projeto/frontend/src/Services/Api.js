import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:80/teste-vaga-dev/projeto/api",
});
  
export default api;