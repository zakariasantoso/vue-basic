import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com/";

export const getTodosApi = () => {
    return axios.get(`${baseUrl}posts`);
}
export const postTodoApi = (userId, title, body) => {
    const data = {
        userId,
        title,
        body
    }
    return axios.post(`${baseUrl}posts`,data);
}
export const putTodoApi = (id, userId, title, body) => {
    const data = {
        userId,
        title,
        body
    }
    return axios.put(`${baseUrl}posts/${id}`,data);
}
export const deleteTodoApi = (id) => {
    return axios.delete(`${baseUrl}posts/${id}`);
}
