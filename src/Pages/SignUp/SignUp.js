import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
 

    const handleSignUp = e =>{
        e.preventDefault()
    }
    return (
        <div className="card flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100 py-20">
        <h1 className="text-5xl text-center font-bold">Sign Up</h1>
        <form className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
          
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
            </div>
        </form>
        <p className='text-center'>New to Books Gallery? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
    </div>
    );
};

export default SignUp;