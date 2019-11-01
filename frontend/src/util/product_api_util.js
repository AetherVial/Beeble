import axios from 'axios';

export const getProducts = () => {
    return axios.get('/api/products')
};

export const addProduct = data => {
    return axios.post('/api/products/', data)
}