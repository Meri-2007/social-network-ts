import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { handlePasswordChange } from "../lib/api"

export function EditPassword(){
    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    const onPasswordChange = (e: React.FormEvent) => {
        e.preventDefault();
        const data = { currentPassword, newPassword };

        handlePasswordChange(data)
            .then(response => {
                if (response.status === 'ok') {
                    navigate('/profile');
                } else {
                    setError(response.message || 'Password update failed');
                }
            })
               
        }
    
    return <>
    <form className="change-password-form" onSubmit={onPasswordChange}>
        <h3>change password</h3>
            <div className="form-group">
                <label htmlFor="oldPassword">Current Password:</label>
                <input
                    type="password"
                     value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="newPassword">New Password:</label>
                <input
                    type="password"
                    id="newPassword"
                     value={newPassword}
                     onChange={(e) => setNewPassword(e.target.value)}
                   
                />
            </div>
            {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}

            <div>
                <button>enter password</button>
            </div>
        
            </form>
        </>
}

