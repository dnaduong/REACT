import axios from 'axios';

class Employee {

    create(formData) {
        const url = 'http://localhost:8000/api/create-employee';
        const config = {
            headers: {
                'content-type': 'application/json',
            }
        };
        return axios.post(url, formData, config);
    }

    getEmployee() {
        const url = 'http://localhost:8000/api/get-employee';

        return axios.get(url)
    }

    deleteEmployee(id) {
        const url = 'http://localhost:8000/api/delete-employee/' + id;

        return axios.get(url)
    }
    update(formData) {
        const url = 'http://localhost:8000/api/update-employee';
        const config = {
            headers: {
                'content-Type': 'application/json',
            }
        };
        return axios.post(url, formData, config);
    }
}

export default new Employee();