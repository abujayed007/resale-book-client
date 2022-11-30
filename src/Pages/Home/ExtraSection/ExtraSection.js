import React from 'react';

const ExtraSection = () => {
    return (
        <div className="hero w-10/12 mx-auto shadow-2xl my-5 font-serif">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://cdn.blackpoolgrand.co.uk/app/uploads/2021/03/famous-Quotes-about-reading-960x546.jpg" className="rounded-lg  w-1/2 h-[350px]" />
                <div className='px-10 '>
                    <h1 className="text-2xl font-bold text-blue-500">“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”</h1>
                    <p className="py-6">George R.R. Martin (American novelist and short-story writer, screenwriter, and television producer. He is the author of the series of epic fantasy novels A Song of Ice and Fire, which was adapted into the Emmy Award-winning HBO series Game of Thrones)</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;