import React from 'react';
import bgTour1 from '../images/bgTour1@2x.webp';
import bgTour2 from '../images/bgTour2@2x.webp';
import bgTour3 from '../images/bgTour3@2x.webp';

const Tour = ({ data }) => {
    const { title, description, steps } = data;

    return (
        <section className='w-full bg-gradient-to-b from-[#FDFAEC] to-[#7ba5d3] flex flex-col justify-center items-center md:px-56'>
            <div className='p-2'>
                <h2 className='text-2xl font-bold text-center'>{title}</h2>
                <p className='text-center'>{description}</p>
            </div>

            <div className="w-full p-2 flex flex-col">
                <div className="flex space-x-2">
                    <p className="text-xl">01.</p>
                    <h3 className="text-xl font-bold">{steps[0].title}</h3>
                </div>
            </div>

            <img src={bgTour1} alt="Tour 1" />

            <div className="w-full p-2 flex flex-col justify-end">
                <div className="flex space-x-2 self-end">
                    <p className="text-xl">02.</p>
                    <h3 className="text-xl font-bold">{steps[1].title}</h3>
                </div>
            </div>

            <div className="w-full p-2 flex flex-col justify-end">
                <div className="flex space-x-2">
                    <p className="text-xl">03.</p>
                    <h3 className="text-xl font-bold">{steps[2].title}</h3>
                </div>
            </div>

            <img src={bgTour2} alt="Tour 2" />

            <div className="w-full p-2 flex flex-col justify-end">
                <div className="flex space-x-2">
                    <p className="text-xl">04.</p>
                    <h3 className="text-xl font-bold">{steps[3].title}</h3>
                </div>
                <div className="">
                    {steps[3].description && <p className="text-base">{steps[3].description}</p>}
                </div>
            </div>


            <img src={bgTour3} alt="Tour 3" />

            <div className="w-full p-2 flex flex-col justify-end">
                <div className='w-fit ml-auto '>
                    <div className="flex space-x-2">
                        <p className="text-xl">05.</p>
                        <h3 className="text-xl font-bold">{steps[4].title}</h3>
                    </div>
                    <div className="ml-auto">
                        {steps[4].description && <p className="text-base">{steps[4].description}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tour;
