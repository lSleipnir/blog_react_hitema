import React, {Component} from "react";
import PostService from "../../services/post.service";
import Post from "../../components/Post";
import {Link} from "react-router-dom";

export default class PostsList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        let posts = await PostService.list();
        this.setState({posts: posts});

        console.log(posts);
    }

    render() {
        let {posts} = this.state;
        return <div className="container">
            <h1 className="text-center mt-4">Liste des articles</h1>
            <hr/>
            <Link to="/articles/ajouter" className="btn btn-success d-block m-auto w-25">Ajouter</Link>
            <div className="row mt-4">
            {
                posts.map((post, index) => {
                    return <div className="col-md-4" key={index}>
                        <Post post={post} />
                    </div>
                })
            }
            </div>
        </div>
    }
}