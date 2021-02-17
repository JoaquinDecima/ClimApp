import axios from 'axios';

const server = 'http://181.31.84.158:3030/v1/';

const API = {
  current: () => axios.get(`${server}current/`)
                    .then(response => response.data),
  currentcity: city => axios.get(`${server}current/${city}`)
                    .then(response => response.data),
  next: () => axios.get(`${server}forecast/`)
                    .then(response => response.data),
  nextcity: city => axios.get(`${server}forecast/${city}`)
                    .then(response => response.data)
};

export default API;
