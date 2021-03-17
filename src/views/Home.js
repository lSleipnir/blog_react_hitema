import React, {Component} from "react";
import Post from "../components/Post";
import PostService from "../services/post.service";

export default class Home extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            post: []
        };
    }

    async componentDidMount() {
        let post = await PostService.list(3);
        this.setState({post: post});
    }

    // className car on est en JSX (pas vraiment en HTML), lui derrière va recréer une classe
    render() {
        let {post} = this.state;
        return <div className="container mt-4">
            <h1 className="text-center">Homepage du blog</h1>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis perferendis praesentium quasi? Alias autem beatae commodi consequuntur, dolorum enim est exercitationem hic maiores quia rem reprehenderit sit sunt, ut voluptas?</p>

            <h2>Les derniers posts</h2>
            <div className="row">
                {post.length === 0 && <p>Aucun post pour le moment ..</p>}

                {
                    post.length > 0 && post.map((post, index) => {
                        return <div className="col-md-4" key={index}>
                            <Post post={post} />
                        </div>
                    })
                }
            </div>
        </div>
    }
}