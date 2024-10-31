import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";
export const weatherApi = {
  getWeather: async (lat, lon) => {
    return await request
      .get(API_ROUTES.WEATHER.GET({ lat, lon }))
      .then((res) => res.data)
      .catch((error) => {
        throw new Error(error);
      });
  },
};
