import axios from "axios";


 const Api = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
 });

 export default Api;