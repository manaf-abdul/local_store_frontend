import axios from "axios"


const Axios = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/", // Replace with your server URL
    timeout: 5000, // Set a timeout for requests (optional)

});

export default Axios
