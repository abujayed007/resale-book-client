import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex  w-1/3 mx-auto py-10 '>
            <div className=''>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>Ooops.....</h1>
                <p className='font-bold'>File Not Found</p>
                </div>
                <img  className='h-[400px] rounded-full' src="https://cdn.windowsreport.com/wp-content/uploads/2017/08/ActiveX-error-429-in-Windows-10.jpg" alt='' />
                
            </div>

        </div>
    );
};

export default ErrorPage;