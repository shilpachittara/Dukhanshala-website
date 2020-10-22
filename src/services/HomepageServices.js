import {  BASE_URL } from '../constant';
import axios from 'axios';
import https from 'https';


const agent = new https.Agent({
    rejectUnauthorized: false,
  });

// export async function getOrderList(data) {

//     try {
//         let res = await axios.post(BASE_URL.URL+'web/category/detail', data);

//         return res;
//     } catch (e) {
//         throw handler(e)
//     }
// }

export async function getCategories(data) {
    try {
        let res = await axios.get(BASE_URL.URL+'category/detail'+data, { httpsAgent: agent });

        return res;
    } catch (e) {
        throw handler(e)
    }
}

export async function getProducts(data) {
    try {
        let res = await axios.get(BASE_URL.URL+'category/products'+data.storeCode+"/"+data.id, { httpsAgent: agent });

        return res;
    } catch (e) {
        throw handler(e)
    }
}

export function handler(err) {
    let error = err;

    if (err.response && err.response.data.hasOwnProperty("message"))
        error = err.response.data;
    else if (!err.hasOwnProperty("message")) error = err.toJSON();
 console.log(error)
    return error;
}