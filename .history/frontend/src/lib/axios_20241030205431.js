import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:8888/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    case 400:
      console.error("Bad Request: ", response.data.message);
      break;
    case 401:
      console.error("Unauthorized: ", response.data.message);
      store.dispatch(loginFailure("Unauthorized access - please log in"));
      break;
    case 403:
      console.error("Forbidden: ", response.data.message);
      break;
    case 500:
      console.error("Server Error: ", response.data.message);
      break;
    default:
      console.error("Unhandled status code: ", response.status);
    //   }
    // }
    return Promise.reject(error);
  }
);

export default request;
