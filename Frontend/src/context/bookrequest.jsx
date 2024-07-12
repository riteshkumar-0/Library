import axios from 'axios';

const bookrequest = axios.create({
  baseURL: 'http://localhost:1001/bookrequest'
});

export default bookrequest;