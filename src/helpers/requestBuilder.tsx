import axios, { Method } from 'axios';

export const METHOD_GET = 'get';
export const METHOD_POST = 'post';
export const METHOD_PUT = 'put';
export const METHOD_DELETE = 'delete';

export const requestBuilder = (path: string, method: Method, data: object) => axios.request({
    baseURL: 'http://localhost:8080',
    method,
    [method === METHOD_GET ? 'params' : 'data']: data,
    responseType: 'json',
    url: path,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});
