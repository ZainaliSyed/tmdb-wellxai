import { create } from 'apisauce';

import Config from 'react-native-config';
import { AxiosRequestConfig } from 'axios';

const httpClient = create({
  // baseURL: Config.MOVIE_DB_API_URL || process.env.MOVIE_DB_API_URL,
  baseURL: "https://api.themoviedb.org/3/",
  
});

httpClient.addRequestTransform((request: AxiosRequestConfig) => {
  // request.params['api_key'] =
  //   Config.MOVIE_DB_API_KEY || process.env.MOVIE_DB_API_KEY;
  request.params['api_key'] = "909594533c98883408adef5d56143539";
});

export default httpClient;
