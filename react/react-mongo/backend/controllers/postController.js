const Employee = require('../models/postModel');
//fix 5
const createEmployee = async (req, res) => {
    try {
        const employee = new Employee({
            msnv: req.body.msnv,
            ten: req.body.ten,
            date: req.body.date,
            phongban: req.body.phongban,
            chucvu: req.body.chucvu,
            phone: req.body.phone,
            email: req.body.email
        });
        const employeeData = await employee.save();

        res.status(200).send({
            success: true,
            msg: 'Employee created successfully',
            data: employeeData
        });

    } catch (err) {
        res.status(400).send({
            success: false,
            msg: err.message
        });
    }
};

const getEmployee = async (req, res) => {
    try {
        const employee = await Employee.find();
        res.status(200).send({ success: true, msg: 'Employee fetched successfully', data: employee });
    } catch (err) {
        res.status(400).send({ success: false, msg: err.message });
    }
}

const deleteEmployee = async (req, res) => {
    try {

        const id = req.params.id;

        await Employee.deleteOne({ _id: id });

        res.status(200).send({ success: true, msg: 'Employee deleted successfully' });

    } catch (err) {
        res.status(400).send({ success: false, msg: err.message });
    }
};

const updateEmployee = async (req, res) => {
    try {
        if (req.body.date != null) {
            var id = req.body.id;
            var msnv = req.body.msnv;
            var ten = req.body.ten;
            var date = req.body.date;
            var phongban = req.body.phongban;
            var chucvu = req.body.chucvu;
            var phone = req.body.phone;
            var email = req.body.email;

            await Employee.findByIdAndUpdate({ _id: id }, { $set: { msnv: msnv, date: date, ten: ten, phongban: phongban, chucvu: chucvu, phone: phone, email: email } });

            res.status(200).send({ success: true, msg: 'Employee updated successfully' });
        } else {
            var id = req.body.id;
            var msnv = req.body.msnv;
            var ten = req.body.ten;
            var date = req.body.date;
            var phongban = req.body.phongban;
            var chucvu = req.body.chucvu;
            var phone = req.body.phone;
            var email = req.body.email;

            await Employee.findByIdAndUpdate({ _id: id }, { $set: { msnv: msnv, ten: ten, date: date, phongban: phongban, chucvu: chucvu, phone: phone, email: email } });

            res.status(200).send({ success: true, msg: 'Employee updated successfully' });
        }
    } catch (err) {
        res.status(400).send({ success: false, msg: err.message });
    }
}
module.exports = {
    createEmployee,
    getEmployee,
    deleteEmployee,
    updateEmployee
}