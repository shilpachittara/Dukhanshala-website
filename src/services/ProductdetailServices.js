import {  BASE_URL } from '../constant';
import axios from 'axios';
import https from 'https';


const agent = new https.Agent({
    rejectUnauthorized: false,
  });



export async function getProductDetail(data) {
    try {
        let res = await axios.get(BASE_URL.URL+'category/product/detail'+data.storeCode+ '/' + data.prodId, { httpsAgent: agent });

        return res;
    } catch (e) {
        // alert(e)
        if(e.response.status===500){
alert("Kindly try some other product.")
        }
 else{
  alert(e)
 }
      
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