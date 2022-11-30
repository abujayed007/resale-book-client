import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {signIn, googleLogin} = useContext(AuthContext)
    const { register,  handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = data =>{
        console.log(data);
        signIn(data.email, data.password)
        .then(result =>{
            const user = result
            console.log(user);
            navigate(from, {replace:true})
        })
        .catch(error => console.error(error))
    }
    
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogIn = () =>{
        googleLogin(googleProvider)
        .then(result=>{
            const user = result.user
            console.log(user)
            navigate(from, {replace:true})
        })
        .catch(error=>console.error(error))
    }
    
    return (
        <div className="flex justify-center h-[800px] items-center ">
            <div className='w-96 p-7'>
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input  {...register("email",{ required:'Email address is required'})} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"  />
                    {errors.email && <p className='text-red-500' role="alert">{errors?.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input  {...register("password", {required:'password is required', minLength:{value:6, message:'password 6 character or longer'}})} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"  />
                    {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                    <label className="label"> <span className="label-text">Forget password</span></label>
                </div>
                <input value="Login" className='btn btn-accent flex mx-auto' type="submit" />
            </form>
            <p className='mt-2'>New to Books Gallery? <Link className='text-green-500' to='/signup'>Create an account</Link></p>
            <input type='submit' onClick={handleGoogleLogIn} value='Login With Google' className='flex mx-auto my-2 btn btn-outline'/>
            </div>
        </div>
    );
};

export default Login;