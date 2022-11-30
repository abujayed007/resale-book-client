import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBooks = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigation();

    const imageHostKey = process.env.REACT_APP_imagebb_key;

    const {data: categoryName = [] } = useQuery({
        queryKey:['categories'],
        queryFn : async () =>{
          const res = await fetch('https://resale-market-assaignment-server.vercel.app/categories')
          const data = await res.json()
          return data
        }
    })

    const handleBook = data => {

        console.log(data)
        const image = data.img[0]
        console.log(image)
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if(imgData.success){
                    console.log(imgData.data.url);
                    const book = {
                        name: data.name,
                        category_name: data.category_name,
                        img: imgData.data.url,
                        story: data.story,
                        location: data.location,
                        originalPrice: data.originalPrice,
                        resalePrice: data.resalePrice,
                        use: data.use,
                    }
            
    
                    fetch('https://resale-market-assaignment-server.vercel.app/books', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json', 
                            
                        },
                        body: JSON.stringify(book)
                    })
                    .then(res => res.json())
                    .then(result =>{
                        console.log(result);
                        toast.success(`${data.name} book is added successfully`);
                        navigate('/dashboard/addbooks')
                        
                    })
                }
            })
        }
   
    return (
        <div>
            <form onSubmit={handleSubmit(handleBook)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input  {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500' role="alert">{errors?.name.message}</p>}
                </div>
            
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input  {...register("resalePrice", { required: true })} type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input  {...register("location", { required: true })} type="text" placeholder="Location" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Story</span></label>
                    <input  {...register("story", { required: true, minLength:{value:200, message:'Story minimum 200 character or longer'} })} type="text" placeholder="Story" className="input input-bordered w-full max-w-xs" />
                    {errors.story && <p className='text-red-500' role="alert">{errors.story?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input  {...register("originalPrice", { required: true })} type="text" placeholder="Original Price" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Year of purchase</span></label>
                    <input  {...register("use", { required: true })} type="text" placeholder="Year of purchase" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">image</span></label>
                    <input  {...register("img", { required: "image is required" })} type="file" className="input input-bordered  max-w-xs" />
                    {errors.img && <p className='text-red-500' role="alert">{errors.img?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                   <select className='my-3' {...register("category_name", { required: true })}>
                   { 
                    categoryName.map((name) =>
                    <option
                    key={name._id}
                    value={name.category_name}
                    >{name.category_name}</option>)
                    
                }
                </select> 
                </div>
                <input value='Add Item' className='btn btn-accent' type="submit" />
            </form>
        </div>
    );
};

export default AddBooks;