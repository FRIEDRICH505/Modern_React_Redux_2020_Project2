import axios from 'axios';

export default axios.create({
baseURL: 'https://api.unsplash.com',
    headers: {
         Authorization: 'Client-ID 8R1N9aA_dbyvQyPmQRHLHZcFIOTcs3BKwfSn2-LyNWE'
   }

});



