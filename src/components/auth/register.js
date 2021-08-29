import { useEffect, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';

function Register({ setValue }) {
    let [email, setEmail] = useState(null);
    let [password, setPassword] = useState(null);
    let [userName, setUserName] = useState(null);
    let history = useHistory();
    let register = () => {
        let body = {
            name: userName,
            password,
            email
        }
        axios.post('http://localhost:8000/api/register', body, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            localStorage.setItem("user", JSON.stringify(response.data.user));
            document.cookie = `token=${response.data.token}`;
            history.push('/home');
            setValue(2);
        });

    }
    return (
        <div className="d-flex flex-column">

            <label>UserName</label>
            <input type="text" onChange={(e) => { setUserName(e.target.value) }} autoComplete />
            <label>Email</label>
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} autoComplete />
            <label>Password</label>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
            <button type="button" className="btn btn-primary" onClick={() => register()}>Submit</button>
        </div>
    );
}

export default Register;
