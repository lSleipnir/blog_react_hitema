import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class User extends Component {

    render() {
        let {user} = this.props;

        return (
            <tr className="h-auto">
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.post}</td>
                <td><Link to={`/users/${user.id}`} className="btn btn-primary mr-4">Détails</Link></td>
                <td><Link to={`/users/${user.id}/modifier`} className="btn btn-warning ml-4">Modifier</Link></td>
            </tr>
        );
    }
}