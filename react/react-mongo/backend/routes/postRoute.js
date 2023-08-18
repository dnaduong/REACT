const express = require('express');
const post_router = express();
const bodyParser = require('body-parser');

post_router.use(bodyParser.json());
post_router.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name, function (err, success) {
            if (err) {
                console.log(err);
            }
        });
    }
});


const upload = multer({ storage: storage });

const postController = require('../controllers/postController');
// fix 3: sua duong dan employee tuong ung theo de bai (all employee)
post_router.post('/create-employee', postController.createEmployee);

post_router.get('/get-employee', postController.getEmployee);

post_router.get('/delete-employee/:id', postController.deleteEmployee);

post_router.post('/update-employee/',  postController.updateEmployee);

module.exports = post_router;