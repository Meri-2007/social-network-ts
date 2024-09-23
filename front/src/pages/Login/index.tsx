import React, { useState } from 'react';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { ILoginUser } from '../../lib/types';
import { handleLogin } from '../../lib/api';

export function Login() {
    const [user, setUser] = useState<ILoginUser>({ login: "", password: "" });
    const navigate = useNavigate();
    const [error, setError] = useState<string>("");

    const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await handleLogin(user);

        if (response.status === "error") {
            setError(response.message||"");
        } else {
            console.log(user);
            
            navigate('/profile');
        }
    };
    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center'>

                <MDBCol lg='8'>

                    <MDBCard className='my-5 rounded-3' style={{ maxWidth: '600px' }}>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp' className='w-100 rounded-top' alt="Sample photo" />

                        <MDBCardBody className='px-5'>

                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login Info</h3>
                            <p>Don't you have an account? <Link to={'/'}>Signup Now</Link></p>
                            <form onSubmit={onLogin}>
                            {error && <p className='text-danger'>{error}</p>}

                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Login'
                                    type='text'
                                    value={user.login}
                                    onChange={e => setUser({ ...user, login: e.target.value })}
                                />
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Password'
                                    type='text'
                                    value={user.password}
                                    onChange={e => setUser({ ...user, password: e.target.value })}
                                />
                                <button type='submit' className='btn btn-outline-info' >Submit</button>
                            </form>



                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}
