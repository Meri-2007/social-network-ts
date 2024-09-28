import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { handleLogOut, handleVerify } from "../../lib/api"
import { IWideUser } from "../../lib/types"
import CustomNavLink from "../../customNavLink"

export const Profile = () => {
    const navigate = useNavigate()
    const [account, setAccount] = useState<IWideUser | null>(null)
    
    useEffect(() => {
        handleVerify()
            .then(response => {
                if (!response.user) {
                    navigate("/login")
                } else {
                    setAccount(response.user)
                }
            })
    }, [])



    const onLogOut = async () => {
        const response = await handleLogOut();

        if (response.status === "ok") {
            setAccount(null)
                navigate('/login')
        }
    };
    return account && (
        <>
            <nav>
                <CustomNavLink to="/profile" end>Profile</CustomNavLink>
                <CustomNavLink to="/profile/settings" end>Settings</CustomNavLink>
                <CustomNavLink to="/profile/search">Search</CustomNavLink>
                <CustomNavLink to="/profile/posts">Posts</CustomNavLink>
                <CustomNavLink to="/profile/followers">Followers</CustomNavLink>
                <CustomNavLink to="/profile/followings">Followings</CustomNavLink>
                <button onClick={onLogOut}>Logout</button>
            </nav>
            <Outlet context={{ account, setAccount }} />
        </>
    )
}
