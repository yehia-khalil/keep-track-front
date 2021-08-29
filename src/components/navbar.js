import axios from 'axios';
import { useEffect, useState } from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';

function NavBar({ getCookie, setValue }) {
    let history = useHistory();
    let logOut = () => {
        axios.get('http://localhost:8000/api/logout', {
            headers: {
                'Authorization': `Bearer ${getCookie('token')}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            localStorage.removeItem("user");
            history.push('/login');
            setValue(1)
        })
    }
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    {localStorage.getItem("user") ? <a href="#" onClick={() => logOut()}>Logout</a> : <Link to="/login">Login</Link>}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
