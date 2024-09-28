import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


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
import { InputUser } from '../../lib/types';
import { handleSignup } from '../../lib/api';
import { SubmitHandler, useForm } from 'react-hook-form';

const validate = yup.object().shape({
    name: yup
        .string()
        .matches(/^[a-zA-Zа]+$/, "fill  the correct name")
        .required('Name is required to fill in'),
    surname: yup
        .string()
        .required('Surname is required to fill in')
        .matches(/^[a-zA-Zа]+$/, "fill in the correct surname"),
    login: yup
        .string()
        .matches(/^[a-z0-9_-]{3,15}$/,"fill correct login")
        .required('email is required to fill in'),
    password: yup
        .string()
        .required('Password is required to fill in')
        .min(8, 'Password must be min 8 symbols')
});

export function Signup() {
    const navigate=useNavigate()
    
    const [user,setUser]=useState<InputUser>({name:"",surname:"",login:"",password:""})
    const[error,setError]=useState<string>("")

     const { register, handleSubmit, formState: { errors } } = useForm<InputUser>({
        resolver: yupResolver(validate)
    });

    const onSubmit: SubmitHandler<InputUser> = (data) => {
        setUser(data);
        
        handleSignup(data)
            .then(response => {
                if (response.status === "error" && response.message) {
                    setError(response.message);
                }else{
                    navigate('/profile');
                }
                setError("")    
            });
    };

    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center'>

                <MDBCol lg='8'>

                    <MDBCard className='my-5 rounded-3' style={{ maxWidth: '600px' }}>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp' className='w-100 rounded-top' alt="Sample photo" />

                        <MDBCardBody className='px-5'>

                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
                            <p>Already have an account? <Link to={'/login'}>Login Now</Link></p>

                            <form onSubmit={handleSubmit(onSubmit)} >
                                {error&& <p className='text-danger'>{error}</p>}
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Name'
                                    type='text'
                                    defaultValue={user.name}
                                    {...register('name')}
                                   
                                />
                                 {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Surname'
                                    type='text'
                                    defaultValue={user.surname}
                                    {...register('surname')}
                                />
                                 {errors.surname && <p className='text-danger'>{errors.surname.message}</p>}
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Login'
                                    type='text'
                                    defaultValue={user.login}
                                    {...register('login')}
                                />
                                 {errors.login && <p className='text-danger'>{errors.login.message}</p>}
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Password'
                                    type='password'
                                    defaultValue={user.password}
                                    {...register('password')}
                                />
                                 {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                                <button type='submit' className='btn btn-outline-info' >Submit</button>
                            </form>



                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}
