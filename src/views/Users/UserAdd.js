import React, {Component} from "react";
import UserService from "../../services/user.service";

export default class UserAdd extends Component {

    constructor(props) {
        super(props);
        this.state= {
            name: null,
            username: null,
            phone: null,
            email: null,
            city: null,
            zipcode: null
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        // récupérer les infos du state
        // envoyer une requête en post
        let {name, username, phone, email, city, zipcode} = this.state;

        let data = {
            name: name,
            username: username,
            phone: phone,
            email: email,
            city: city,
            zipcode: zipcode,
            userId: 1
        }

        let call = await UserService.create(data);         //ajout de l'article
        this.props.history.push('/users');   //dès qu'on ajoute on est redirigé sur la route
        console.log(call);
        console.log(data);
    }

    render() {
        return <div className="container">
            <h2 className="text-center mt-4">Ajouter un utilisateur</h2>
            <hr/>

            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="row">
                    <div className="offset-md-4 col-md-4">
                        <div className="row">
                            <div className="col-md-6"><label>Name</label></div>
                            <div className="col-md-6">
                                <input type="text" id="name" className="form-control" required
                                       onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label>Username</label></div>
                            <div className="col-md-6">
                                <input type="text" id="username" className="form-control" required
                                       onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label>E-mail</label></div>
                            <div className="col-md-6">
                                <input type="text" id="email" className="form-control" required
                                       onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label>Phone</label></div>
                            <div className="col-md-6">
                                <input type="text" id="phone" className="form-control" required
                                       onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label>City</label></div>
                            <div className="col-md-6">
                                <input type="text" id="city" className="form-control" required
                                       onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label>Zip-code</label></div>
                            <div className="col-md-6">
                                <input type="text" id="zipcode" className="form-control"  required
                                       onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-success mt-4">Ajouter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        //{post && post.title} on vérifie que post existe et si oui alors on écrit post.title
    }
}