import axios from "axios";

const api = axios.create({
    baseURL: "https://fs-webapi.herokuapp.com"
});

export default api;