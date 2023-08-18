import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Users />} />
                    <Route path="/create" element={<CreateUser />}></Route>
                    <Route path="/update/:id" element={<UpdateUser />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
