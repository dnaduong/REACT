import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import postService from "../services/postService";

function UpdateComponents(props) {


    const [isEmployee, invokeModal] = useState(false);
    const initModal = () => {
        return invokeModal(!isEmployee);
    }

    // form updation data
    const [msnv, setMSNV] = useState(props.msnv);
    const [ten, setTen] = useState(props.ten);
    const [phongban, setPhongban] = useState(props.phongban);
    const [chucvu, setChucvu] = useState(props.chucvu);
    const [phone, setPhone] = useState(props.phone);
    const [email, setEmail] = useState(props.email);
    const [date, setDate] = useState(props.date);
    const [id, setId] = useState(props.id);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('id', id);
        formData.append('msnv', msnv);
        formData.append('ten', ten);
        formData.append('date', date);
        formData.append('phongban', phongban);
        formData.append('chucvu', chucvu);
        formData.append('phone', phone);
        formData.append('email', email);

        const response = await postService.update(formData);
        if(response.data.success == true){
            alert('Employee updated successfully');
        }else{
            alert('Something went wrong');
        }

        initModal();
    }

    return (
        <>
            <Button variant="success" onClick={initModal}>
                Edit
            </Button>

            <Modal show={isEmployee} >
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>Update Employee</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <div className="form-group">
                            <label htmlFor="msnv">MSNV: </label>
                            <input type="text" name="msnv" value={msnv} placeholder="MSNV" className="form-control" onChange={event => setMSNV(event.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ten">Ten: </label>
                            <input type="text" name="ten" value={ten} placeholder="ten" className="form-control" onChange={event => setTen(event.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Ngay sinh: </label>
                            <input type="date" name="date" value={date} className="form-control" onChange={event => setDate(event.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phongban">Phong ban: </label>
                            <input type="text" name="phongban" value={phongban} className="form-control" onChange={event => setPhongban(event.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="chucvu">Chuc vu: </label>
                            <input type="text" name="chucvu" value={chucvu} className="form-control" onChange={event => setChucvu(event.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone: </label>
                            <input type="text" name="phone" value={phone} className="form-control" onChange={event => setPhone(event.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input type="text" name="email" value={email} className="form-control" onChange={event => setEmail(event.target.value)} required />
                        </div>
                
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={initModal} style={{marginRight:'5px', marginLeft:'10px'}}>
                            Close
                        </Button>
                        <Button type="submit" variant="dark">
                            Update
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );

}
export default UpdateComponents;