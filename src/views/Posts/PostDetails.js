import React, {Component} from "react";
import PostService from "../../services/post.service";

export default class PostDetails extends Component {

    constructor(props) {
        super(props);
        this.state= {
            post: null
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await PostService.details(id);
        console.log((response));
        this.setState({post: response.data});
        console.log(this.state);
    }

    async handleDelete() {
        console.log("suprression");
        let {post} = this.state;
        await PostService.delete(post.id);
        this.props.history.push('/articles');
    }

    render() {
        let {post} = this.state;
        return <div className="container">
            <h1>Article - {post && post.title}</h1>
            <h2>Contenu</h2>
            <p>{post && post.body}</p>

            <button className="btn btn-danger" onClick={() => this.handleDelete()}>Supprimer</button>
        </div>

        //{post && post.title} on vérifie que post existe et si oui alors on écrit post.title
    }
}