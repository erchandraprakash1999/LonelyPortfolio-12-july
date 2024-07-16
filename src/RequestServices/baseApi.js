import axios from 'axios';

const api = axios.create({
        baseURL:'https://single-portfolio.skytravelsjeddah.com/public/api'
//         ,headers:{
//         'authorization':`Bearer ${localStorage.getItem('jwt')}`
// }
})
export default api;