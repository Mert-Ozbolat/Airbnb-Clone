import axios from 'axios';
import { BASEURL } from './urls';


const Client = axios.create({
    baseURL: BASEURL,
})



export default Client
