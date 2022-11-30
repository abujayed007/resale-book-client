import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const navigate = useNavigate()


    const handleSignUp = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
               
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                .then(() => {
                    saveUser(data.name, data.email, data.role);
                })
                .catch(err => console.log(err));
            })
            .catch(error => console.error(error))



        const saveUser = (name, email, role) => {
            const users = { name, email, role }
                fetch('https://resale-market-assaignment-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(users)
                })
                .then(res => res.json())
                .then(data => {
                    setCreatedUserEmail(email);
                    navigate('/')
                })
        }

    }
    return (
        <div className="flex justify-center h-[800px] items-center ">
            <div className='w-96 p-7'>
                <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input  {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500' role="alert">{errors?.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input  {...register("email", { required: 'Email address is required' })} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500' role="alert">{errors?.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input  {...register("password", { required: 'password is required', minLength: { value: 6, message: 'password 6 character or longer' } })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                        <label className="label"> <span className="label-text">Forget password</span></label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <select className='my-3' {...register("role", { required: true })}>
                            <option value="">Select</option>
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
                    </div>

                    <input value='Sign Up' className='btn btn-accent flex mx-auto' type="submit" />
                </form>
                <p className='mt-2'>Already have an account? <Link className='text-green-500' to='/login'>log in</Link></p>
                <button className='flex mx-auto my-2 btn btn-outline'>Log In With Google</button>
            </div>
        </div>
    );
};

export default SignUp;