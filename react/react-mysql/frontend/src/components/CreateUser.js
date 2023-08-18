import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [country, setcountry] = useState('');
    const [subject, setsubject] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:8081/create', {
                firstname,
                lastname,
                country,
                subject, 
                
            })
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <div className="container mt-5">
                <h1>Contact Form</h1>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">
                            Firstname
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            name="firstname"
                            onChange={(event) =>
                                setfirstname(event.target.value)
                            }
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">
                            Lastname
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            name="lastname"
                            onChange={(event) =>
                                setlastname(event.target.value)
                            }
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">
                            Country
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="country"
                            name="country"
                            onChange={(event) => setcountry(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label">
                            Subject
                        </label>
                        <textarea
                            type="text"
                            className="form-control"
                            id="subject"
                            name="subject"
                            onChange={(event) => setsubject(event.target.value)}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;
