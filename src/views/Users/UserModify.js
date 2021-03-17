import React, {Component} from "react";
import UserService from "../../services/user.service";

export default class UserModify extends Component {

    constructor(props) {
        super(props);
        this.state= {
            name: "",
            username: "",
            phone: "",
            email: "",
            city: "",
            zipcode: "",
            user: {}
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await UserService.details(id);
        this.setState({
            user: response.data,
            name: response.data.name,
            username: response.data.username,
            email: response.data.email,
            phone: response.data.phone,
            city: response.data.address.city,
            zipcode: response.data.address.zipcode,
        });
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

        let id = this.state.user.id;
        let call = await UserService.modify(id, data);         //ajout de l'article
        console.log((call));
        this.props.history.push('/users');   //dès qu'on ajoute on est redirigé sur la route
    }

    render() {
        let {name, username, email, phone, city, zipcode} = this.state;
        return <div className="container">
            <h2 className="text-center mt-4">Modifier un utilisateur</h2>
            <hr/>

            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="row">
                    <div className="offset-md-4 col-md-4">
                        <div className="row">
                            <div className="col-md-6"><label>Name</label></div>
                            <div className="col-md-6">
                                <input type="text" id="name" className="form-control" value={name} required
                                       onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6"><label>Username</label></div>
                            <div className="col-md-6">
                                <input type="text" id="username" className="form-control" value={username} required
                                       onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label>E-mail</label></div>
                            <div className="col-md-6">
                                <input type="text" id="email" className="form-control" value={email} required
                                       onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label>Phone</label></div>
                            <div className="col-md-6">
                                <input type="text" id="phone" className="form-control" value={phone} required
                                       onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label>City</label></div>
                            <div className="col-md-6">
                                <input type="text" id="city" className="form-control" value={city} required
                                       onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label>Zip-code</label></div>
                            <div className="col-md-6">
                                <input type="text" id="zipcode" className="form-control" value={zipcode} required
                                       onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-danger mt-4">Modifier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        //{post && post.title} on vérifie que post existe et si oui alors on écrit post.title
    }
}