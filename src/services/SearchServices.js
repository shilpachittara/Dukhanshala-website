import { BASE_URL } from '../constant';
import axios from 'axios';
import https from 'https';


const agent = new https.Agent({
    rejectUnauthorized: false,
});



export async function getProductListBySearch(data){
    try {
        let res = await axios.get(BASE_URL.URL + 'search/products/' + data.storeCode+"/"+data.val, { httpsAgent: agent });

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