import axios from 'axios';

const instance = axios.create({

    baseURL: 'https://burger-00.firebaseio.com'
})

export default instance;