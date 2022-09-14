import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CakebookHeader from "./CakebookHeader";
import "./Admin.css"

const Admin = () => {

    const [adminName, setAdminName] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [message, setMessage] = useState('');

    const administrator = 'cakebookadmin';
    const administratorPass = 'admin1234*';

    const navigate = useNavigate();

    const logAdmin = () => {
        if (adminName === administrator && adminPassword === administratorPass) {
            navigate('/adminpanel');
        } else {
            setMessage('Credenciales incorrectas');
        }
    };

    return (
        <div>
            <CakebookHeader />

            <div className='containerAdmin'>
                <div className="errorMessage">
                    {message}
                </div>

                <div className='adminLogIn'>
                    <input className="adminInput" value={adminName} placeholder='Administrador' onChange={(e) => setAdminName(e.target.value)} />
                    <input className="adminInput" value={adminPassword} placeholder='Contraseña' type='password' onChange={(e) => setAdminPassword(e.target.value)} />
                    <button className="logAdminBtn" onClick={() => logAdmin()}>Iniciar sesión</button>
                </div>
            </div>
        </div>
    );
}

export default Admin;