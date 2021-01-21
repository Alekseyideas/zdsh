import axios from 'axios';
import { API_URL } from '../config';

export async function callApi(
  method: 'get' | 'post' | 'put' | 'delete',
  path: string,
  data?: Object | null
) {
  try {
    let token = '';
    let url = API_URL;

    const res = await axios.request({
      method,
      headers: {
        'X-ACCESS-TOKEN': token,
      },
      url: url + path,
      data: data ? JSON.stringify(data) : null,
    });
    return res.data;
  } catch (e) {
    console.log('Error Api Call', e.response);
    console.log('Error', e);
    let error = e;
    // if (e.response && e.response.statusText) error = 'url: ' + path + ' - ' + e.response.statusText;
    if (e.response && e.response.data) error = e.response.data;
    throw error;
  }
}
