import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const Client = {
    method: 'GET',
    url: 'https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace',
    params: {
        id: 'ChIJ7cv00DwsDogRAMDACa2m4K8',
        display_name: 'Chicago, IL',
        totalRecords: '10',
        currency: 'USD',
        adults: '1'
    },
    headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': process.env.RAPIDAPI_HOST
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}

export default Client
