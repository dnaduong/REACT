import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8081/')
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8081/delete/' + id);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
            <div className=" bg-white rounded p-3">
                <Link to="/create" className="btn btn-success">
                    Add +
                </Link>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Firstname</th>
                            <th scope="col">lastname</th>
                            <th scope="col">Country</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => (
                            <tr key={index}>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.country}</td>
                                <td>{item.subject}</td>
                                <td>
                                    <Link
                                        to={`update/${item._id}`}
                                        className="btn btn-warning"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        className="btn btn-danger ms-1"
                                        onClick={(e) => {
                                            handleDelete(item.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
