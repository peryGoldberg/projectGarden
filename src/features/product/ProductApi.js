import axios from 'axios';
let baseUrl="http://localhost:8000/api/"


//https://projectnode-feg7.onrender.com
export const getAllProduct = (page, perPage,search) => {
    return axios.get(`${baseUrl}product/?page=${page}&perPage=${perPage}&search=${search}`)
}


export const getNumOfAllPages = () => {
   
    return axios.get(`${baseUrl}product/num/pages`);
}



export const getProductById = (id) => {
    return axios.get(`${baseUrl}product/`);
}

export const addProduct = (product,token) => {

     return axios.post(`${baseUrl}product/`,product,{
         headers: {
                    "x-access-token": token
                }
     });
}

export const deleteProductById = (id,token) => {
    return axios.delete(`${baseUrl}product/${id}`,{
        headers: {
                   "x-access-token": token
               }
            });
}

export const updateProductById = (id,token,product) => {
    return axios.put(`${baseUrl}product/${id}`,product,{
        headers: {
                   "x-access-token": token
               }
            });
}
  

