import React from "react";
import { useState } from "react";
import postService from "../services/postService";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function CreateComponents() {
    const [msnv, setMSNV] = useState("");
    const [date, setDate] = useState("");
    const [ten, setTen] = useState("");
    const [phongban, setPhongban] = useState("");
    const [chucvu, setChucvu] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append("msnv", msnv);
        formData.append("date", date);
        formData.append("ten", ten);
        formData.append("phongban", phongban);
        formData.append("chucvu", chucvu);
        formData.append("phone", phone);
        formData.append("email", email);

        const response = await postService.create(formData);

        if (response.data.success == true) {
            alert("Employee created successfully");
            navigate("/employee-list");
        } else {
            alert("Employee created failed");
        }
        event.target.reset();
    };

    return (
        <div>
            <h2>Employee Information</h2>
            <form onSubmit={handleSubmit} >
                <input
                    className="form-control mb-3 w-50 p-2 mx-auto d-block text-center border border-2 border-dark"
                    type="text"
                    name="msnv"
                    placeholder="MSNV"
                    style={{width:'20%', height:'25px', marginBottom:'7px'}}
                    onChange={(event) => setMSNV(event.target.value)}
                    required
                />
                <br />
                <input
                    className="form-control mb-3 w-50 p-2 mx-auto d-block text-center border border-2 border-dark"
                    type="text"
                    name="ten"
                    placeholder="Ten"
                    style={{width:'20%', height:'25px', marginBottom:'7px'}}
                    onChange={(event) => setTen(event.target.value)}
                    required
                />
                <br />
                <input
                    className="form-control mb-3 w-50 p-2 mx-auto d-block text-center border border-2 border-dark"
                    type="date"
                    name="ngaysinh"
                    style={{width:'20%', height:'25px', marginBottom:'7px'}}
                    onChange={(event) => setDate(event.target.value)}
                    required
                />
<br />
                <input
                    className="form-control mb-3 w-50 p-2 mx-auto d-block text-center border border-2 border-dark"
                    type="text"
                    name="phongban"
                    placeholder="Phongban"
                    style={{width:'20%', height:'25px', marginBottom:'7px'}}
                    onChange={(event) => setPhongban(event.target.value)}
                    required
                />
                <br />
                <input
                    className="form-control mb-3 w-50 p-2 mx-auto d-block text-center border border-2 border-dark"
                    type="text"
                    name="chucvu"
                    placeholder="Chucvu"
                    style={{width:'20%', height:'25px', marginBottom:'7px'}}
                    onChange={(event) => setChucvu(event.target.value)}
                    required
                />
                <br />
                <input
                    className="form-control mb-3 w-50 p-2 mx-auto d-block text-center border border-2 border-dark"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    style={{width:'20%', height:'25px', marginBottom:'7px'}}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                />
                <br />
                <input
                    className="form-control mb-3 w-50 p-2 mx-auto d-block text-center border border-2 border-dark"
                    type="text"
                    name="email"
                    placeholder="Email"
                    style={{width:'20%', height:'25px', marginBottom:'7px'}}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <br />
                <button className="btn btn-danger">Submit</button>
                <Link to='/employee-list' style={{ marginLeft: '10px' }}>
                    <button className="btn btn-success">Employee List</button>
                </Link>
            </form>
        </div>
    );
}

export default CreateComponents;
