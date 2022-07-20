import axios from "axios";

axios.defaults.baseURL = "https://btk7dl15c9.api.quickmocker.com";

axios.interceptors.request.use(
  async (config) => {
    console.log("request ok");
    return config;
  },
  (error) => {
    console.log("request error");
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    console.log("response ok");
    return response;
  },
  (error) => {
    console.log("response error");
    return Promise.reject(error);
  }
);

export default {
  methods: {
    axiosPost(url, data) {
      return axios.post(url, data);
    }
  }
};