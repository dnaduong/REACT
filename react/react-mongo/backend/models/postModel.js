const mongoose = require('mongoose');

//fix 4: them sua theo de bai, thay employee
const employeeSchema = mongoose.Schema({
    msnv: {
        type: String,
        required: true
    },
    ten: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    phongban: {
        type: String,
        required: true
    },
    chucvu: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Employee', employeeSchema);