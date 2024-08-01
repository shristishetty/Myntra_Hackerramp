import axios from 'axios';

const BASE_URL = 'https://hackerramp-x7bnmt.readyplayer.me/avatar/api';

const createAnonymousUser = async() => {
    try{
        const response = await axios.post(`${BASE_URL}/users`);
        return response.data.data;
    } catch(error){
        console.error('Error creating anonymous user', error);
        throw error;
    }
};

export default {
    createAnonymousUser,
};