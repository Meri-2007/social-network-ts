import { useNavigate } from "react-router-dom"
import { handleLoginChange } from "../lib/api"
import { useState } from "react"

export function EditLogin() {
    const [password,setPassword]=useState<string>("")
    const [newLogin,setNewLogin]=useState<string>("")
    const [error,setError]=useState<string>("")
    const navigate = useNavigate()

    const onLoginChange = (e: React.FormEvent) => {
        e.preventDefault();
        const data = { password, newLogin };

        handleLoginChange(data)
            .then(response => {
                if (response.status === 'ok') {
                    navigate('/profile');
                } else {
                    setError(response.message || 'Login update failed');
                }
            })
           
    }


    return <>
        <form className="change-password-form" onSubmit={onLoginChange}>
            <h3>change login</h3>
            <div className="form-group">
                <label htmlFor="oldPassword"> Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                />
            </div>

            <div className="form-group">
                <label htmlFor="newPassword">New Login:</label>
                <input
                    type="text"
                    value={newLogin}
                    onChange={(e) => setNewLogin(e.target.value)}
                />
            </div>
            {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
            <div>
                <button type="submit" >enter login</button>
            </div>
        </form>
    </>
}
