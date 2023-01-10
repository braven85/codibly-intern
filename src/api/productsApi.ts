import axiosClient from './axiosClient';

const productsEndpoint = 'products';

const productsApi = {
  getAll: () => axiosClient.get(productsEndpoint),
};

export default productsApi;
