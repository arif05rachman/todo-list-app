import axios from 'axios'

export const fetcher = axios.create({
    baseURL: 'https://todo.api.devcode.gethired.id/',
    timeout: 1000,
    headers: { "Content-Type": "application/json", }
});