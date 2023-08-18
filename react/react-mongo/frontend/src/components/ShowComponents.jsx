import React from "react";
import { useState, useEffect } from "react";
import postService from "../services/postService";
import { Link } from "react-router-dom";
import UpdateComponents from "./UpdateComponents";



function ShowComponents() {

    const [employees, setEmployee] = useState({});

    const fetchEmployees = async () => {
        setEmployee(await postService.getEmployee());
    };

    useEffect(() => {
        fetchEmployees();
    }, [employees]);

    const deleteEmployee = async (id, e) => {
        var response = await postService.deleteEmployee(id);
        if (response.data.success == true) {
            alert('Employee deleted successfully');
            document.getElementById(id).parentElement.parentElement.removeChild(document.getElementById(id).parentElement);
        } else {
            alert('Something went wrong');
        }
    };

    return (
        <div className="App">
            <Link to="/app" className="btn btn-success">
                <h3>Add Employee</h3>
            </Link>
            <h1>Employees</h1>
            {employees.data != undefined && employees.data.data.length > 0 && (
                <table style={{ width: '100%' }} border='1'>
                    <thead>
                        <th>MSNV</th>
                        <th>Ten</th>
                        <th>Ngay sinh</th>
                        <th>Phong ban</th>
                        <th>Chuc vu</th>
                        <th>PHONE</th>
                        <th>Email</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {employees.data.data.map(employee => (
                            <tr>
                                <td>{employee.msnv}</td>
                                <td>{employee.ten}</td>
                                <td>{employee.date}</td>
                                <td>{employee.phongban}</td>
                                <td>{employee.chucvu}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button id={employee._id} onClick={(e) => { deleteEmployee(employee._id, e) }} className="btn btn-warning " style={{ marginRight: '10px' }}>Delete</button>
                                    <UpdateComponents id={employee._id}
                                        msnv={employee.msnv}
                                        ten={employee.ten}
                                        phongban={employee.phongban}
                                        date={employee.date}
                                        chucvu={employee.chucvu}
                                        phone={employee.phone}
                                        email={employee.email}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ShowComponents;