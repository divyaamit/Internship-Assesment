import Axios from 'axios';

const instance = Axios.create({
    baseURL: "https://reqres.in/api/"
});

instance.defaults.headers.common['Content-Tytpe'] = "application/json";

instance.interceptors.request.use(
    request => {
        return request
    },
    error => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance;