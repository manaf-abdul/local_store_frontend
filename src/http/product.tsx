import axios from './axios'


export const fetchProduct:any = async (productId:string) => {
    console.log(productId);
 
    return await axios.get(`/posts/${productId}`);
 
 };
 

