import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class UserService{

    //pas obligé d'avoir un paramètre
    static async list(limit = null){
        let call = await axios.get(`${baseUrl}/users`);
        let users = limit !== null ? call.data.slice(0, limit) : call.data;

        //for (let user of users) {
        //    let responsePost = await axios.get(`${baseUrl}/users/${user.id}/posts`);
        //    let post = responsePost.data;
        //    user.nbrPosts = post.length;
        //}

        let posts = await axios.get(`${baseUrl}/posts`);
        for (let user of users) {
            let nb = 0;
            for (const post of posts.data) {
                if(user.id === post.userId) {
                    nb++;
                }
            }
            user.post = nb;
        }
        return users;

        //if (limit !== null) {
        //    return call.data.slice(0, limit);
        //} else {
        //    return call.data;
        //}
    }

    // route qui permet de requêter l'api
    static async create(data) {
        return await axios.post(`${baseUrl}/users`, data);
    }

    //route qui permet de requêter afin d'avoir le détail
    static async details(id) {
        return await axios.get(`${baseUrl}/users/${id}`)
    }

    //route qui permet de modifier un post
    static async modify(id, data) {
        return await axios.put(`${baseUrl}/users/${id}`, data);
    }

    //route qui permet de supprimer un post
    static async delete(id) {
        return await axios.delete(`${baseUrl}/users/${id}`);
    }

    static async getPosts(id) {
        return await axios.get(`${baseUrl}/posts/?userId=${id}`);
    }
}