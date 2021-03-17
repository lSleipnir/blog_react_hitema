import React, {Component} from "react";
import User from "../../components/User";
import UserService from "../../services/user.service";
import {Link} from "react-router-dom";

export default class UsersList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    async componentDidMount() {
        let user = await UserService.list();
        this.setState({user: user});
        console.log(user);
    }

    render() {
        let {user} = this.state;
        return <div className="container">
            <h1 className="text-center mt-4">Liste des Utilisateurs</h1>
            <hr/>
            <Link to="/users/ajouter" className="btn btn-success d-block m-auto w-25">Ajouter</Link>
            <table className="table table-striped mt-4">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Nb of Posts</th>
                </tr>
                </thead>
                <tbody>
                {
                    user.map((user, index) => {
                        return <User user={user} key={index}/>

                    })
                }
                </tbody>
            </table>
        </div>
    }
}