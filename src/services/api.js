import axios from "axios";

const api = axios.create({
    baseURL: "https://foodstacks-api.herokuapp.com"
});

export default api;