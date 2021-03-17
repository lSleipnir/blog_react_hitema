import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class PostService{

    //pas obligé d'avoir un paramètre
    static async list(limit = null){
        let call = await axios.get(`${baseUrl}/posts`);
        let posts = limit !== null ? call.data.slice(0, limit) : call.data;
        let users = await axios.get(`${baseUrl}/users`);

        //for (let post of posts) {
        //    for (const user of users.data) {
        //        if(user.id === post.userId) post.user = user;
        //    }
        //}
        //return posts;

        return posts.map(post => {
            post.user = users.data.find(user => user.id === post.userId);
            return post;
        })
    }

    // route qui permet de requêter l'api
    static async create(data) {
        return await axios.post(`${baseUrl}/posts`, data);
    }

    //route qui permet de requêter afin d'avoir le détail
    static async details(id) {
        return await axios.get(`${baseUrl}/posts/${id}`)
    }

    //route qui permet de modifier un post
    static async modify(id, data) {
        return await axios.put(`${baseUrl}/posts/${id}`, data);
    }

    //route qui permet de supprimer un post
    static async delete(id) {
        return await axios.delete(`${baseUrl}/posts/${id}`);
    }

    static async getUser(id) {
        return await axios.get(`${baseUrl}/posts/?userId=${id}`);
    }
}