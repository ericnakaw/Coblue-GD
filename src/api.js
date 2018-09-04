import axios from 'axios';

export default axios.create({
    baseURL: 'http://gd-back.local/api/v1/'
});