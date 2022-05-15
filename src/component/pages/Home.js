import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3002/users");
        setUser(result.data)
    }
    return (
        <div className="container">
            <div className="py-4">
                <h3>Hello Web</h3>
                <table className="table border shadow">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary">View</Link>

                                    <Link className="btn btn-outline-primary">Edit</Link>

                                    <Link className="btn btn-outline-primary">Delete</Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home