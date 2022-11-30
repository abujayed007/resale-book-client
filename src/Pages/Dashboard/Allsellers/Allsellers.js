import React from 'react';
import { useQueries, useQuery } from 'react-query';

const Allsellers = () => {
    const {data:sellers = []} = useQuery({
        queryKey:['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers')
            const data = await res.json()
            return data
        }
    })
      
    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        sellers.map((seller, i) =><tr key={seller._id}>
            <th>{i+1}</th>
            <td>{seller.name}</td>
            <td>{seller.email}</td>
            {/* <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
            <td><button className='btn btn-xs btn-danger'>Delete</button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Allsellers;