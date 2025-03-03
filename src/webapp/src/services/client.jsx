import axios from 'axios';

const API_URL = 'http://localhost:5087/api';

const Client = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-type': 'application/json'
    }
});

Client.interceptors.request.use(
    async config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

Client.interceptors.response.use(
    // unwrap response data
    ({ data }) => data,
    // catch statusCode != 200 responses and format error
    error => {
        if (error?.response) {
            const errorData = {
                ...error.response.data,
                status: error.response.status
            };
            return Promise.reject(errorData);
        }
        return Promise.reject(error);
    }
);

export default Client;
