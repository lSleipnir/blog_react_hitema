import React, {Component} from "react";
import PostService from "../../services/post.service";

export default class PostModify extends Component {

    constructor(props) {
        super(props);
        this.state= {
            title: "",
            body: "",
            post: {}
        }
    }

   async componentDidMount() {
       let {id} = this.props.match.params;
       let response = await PostService.details(id);
       this.setState({post: response.data, title: response.data.title, body: response.data.body});
       console.log(this.state);
   }

    handleChange(e) {
        this.setState({
            [e.target.id] : e.target.value
        });
        console.log(e.target.id);
    }

    async handleSubmit(e) {
        e.preventDefault();
        // récupérer les infos du state
        // envoyer une requête en post
        let {title, body} = this.state;

        let data = {
            title: title,
            body: body,
            userId: 1
        }

        let id = this.state.post.id;
        let call = await PostService.modify(id, data);         //ajout de l'article
        console.log((call));
        this.props.history.push('/articles');   //dès qu'on ajoute on est redirigé sur la route
    }

    render() {
        let {title, body} = this.state;
        return <div className="container">
            <h2 className="text-center mt-4">Modifier un article</h2>
            <hr/>

            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label>Titre</label>
                    <input type="text" id="title" className="form-control" value={title} required
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label>Contenu</label>
                    <textarea type="text" id="body" rows="5" className="form-control" value={body} required
                              onChange={(event) => this.handleChange(event)}/>
                </div>
                <button type="submit" className="btn btn-primary">Modify</button>
            </form>
        </div>

        //{post && post.title} on vérifie que post existe et si oui alors on écrit post.title
    }
}