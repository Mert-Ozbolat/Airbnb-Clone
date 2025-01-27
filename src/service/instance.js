import axios from 'axios';
import { BASEURL } from './urls';


const Client = axios.create({
    baseURL: BASEURL,
    timeout: 10000, 
    headers: {
        "Content-Type": "application/json",
    },
})



export default Client
