import axios from "axios";


const instance = axios.create({
    baseURL: "...", //This is the API (cloud function) URL
});


export default instance;
