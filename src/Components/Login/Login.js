import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [returningUser , setReturningUser] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = useRef();
    password.current = watch('password');
    const onSubmit = data => {
        console.log(data);
    };


    return (
        <div className="main">
            <div className="log-in">
                <div className="container login-formStyle">
                    <div className="">
                        {returningUser ? <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="form-group">
                                <input type="email"  ref={register({ required: true, pattern: /\S+@\S+\.\S+/})}className="form-control" name="email" id="email" placeholder="Email"/>
                                {errors.email && errors.email.type === "required" && <span className="text-danger">Please enter your email address</span>}
                                {errors.email && errors.email.type === "pattern" && <span className="text-danger">Please enter the valid email address</span>}
                            </div>
                            <div className="form-group">
                                <input type="password" ref={register({ required: true, minLength: 6 })}  className="form-control" name="password" id="password" placeholder="Password"/>
                                {errors.password && errors.password.type === "required" && <span className="text-danger">Please enter your password</span>}
                                {errors.password && errors.password.type === "minLength" && <span className="text-danger">Please enter at least 6 characters</span>}
                            </div>
                            
                            <div className="form-group">
                                <input type="submit" className="btn text-white login-btn btn-block text-uppercase" value="Log in"/>
                            </div>
                            <div className="text-center pt-2">
                                <label style={{color: '#fff'}}>
                                    Don't have an account?
                                    <span onClick={() => setReturningUser(false)} className="ml-1 sign-bold" style={{color: 'rgb(201, 13, 13)'}}>Create an account</span>
                                </label>
                            </div>
                        </form>
                        :
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="form-group">
                                <input type="name" ref={register({ required: true, minLength: 4 })} className="form-control" name="name" id="name" placeholder="Name"/>
                                {errors.name && errors.name.type === "required" && <span className="text-danger">Please enter your name</span>}
                                {errors.name && errors.name.type === "minLength" && <span className="text-danger">Please enter at least 4 characters</span>}
                            </div>
                            <div className="form-group">
                                <input type="email"  ref={register({ required: true, pattern: /\S+@\S+\.\S+/})}className="form-control" name="email" id="email" placeholder="Email"/>
                                {errors.email && errors.email.type === "required" && <span className="text-danger">Please enter your email address</span>}
                                {errors.email && errors.email.type === "pattern" && <span className="text-danger">Please enter the valid email address</span>}
                            </div>
                            <div className="form-group">
                                <input type="password" ref={register({ required: true, minLength: 6 })}  className="form-control" name="password" id="password" placeholder="Password"/>
                                {errors.password && errors.password.type === "required" && <span className="text-danger">Please enter your password</span>}
                                {errors.password && errors.password.type === "minLength" && <span className="text-danger">Please enter at least 6 characters</span>}
                            </div>
                            <div className="form-group">
                                <input type="password" ref={register({ required: true, validate: (value) => value === password.current})} className="form-control" name="confirm_password" id="confirm_password" placeholder="Confirm Password"/>
                                {errors.confirm_password && errors.confirm_password.type === "required" && <span className="text-danger">This field is required</span>}
                                {errors.confirm_password && errors.confirm_password.type === "validate" && <span className="text-danger">Password does not match</span>}
                            </div>
                            
                            <div className="form-group">
                                <input type="submit" className="btn text-white login-btn btn-block text-uppercase" value="register"/>
                            </div>
                            <div className="text-center">
                                <label style={{color: '#fff'}}>
                                    Already have an account?
                                    <span onClick={() => setReturningUser(true)} className="ml-1 sign-bold" style={{color: 'rgb(201, 13, 13)'}}>Login</span>
                                </label>
                            </div>
                        </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;