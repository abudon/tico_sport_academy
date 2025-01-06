// IMPORT REQUIREMENT
import axios from "axios";


// VARIABLES
const server_url = process.env.VITE_SERVER_URL

// FUNCTIONS
 const axiosClient = axios.create({
     baseURL:server_url,
     timeout: 5000,
     headers: {
         'Content-Type': 'application/json',
     },
 })

axiosClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token')
    if (token){
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
},
    (error)=> {
    return Promise.reject(error)
    }
)

axiosClient.interceptors.response.use(
    (response)=>{
    return response.data
},
    (error)=>{
        if (error.response) {
            // Server responded with a status other than 2xx
            console.error('Response Error:', error.response.data);
        } else if (error.request) {
            // Request was sent but no response was received
            console.error('Request Error:', error.request);
        } else {
            // Something happened setting up the request
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
)
 export default axiosClient
