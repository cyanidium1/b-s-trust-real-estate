import React from 'react';
import bg from '../images/palms.jpg'

const GetEstates = ({ data }) => {
    const { title, subtitle, buttonText, features } = data;

    return (
        <section
            className="text-center flex flex-col justify-center items-center p-4 relative"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute bottom-[-1px] h-32 w-full bg-gradient-to-b from-transparent to-[#9FD8D8]" />

            <h2 className="text-white text-center text-2xl font-semibold mt-32 mb-4">
                {title}
            </h2>

            <p className="text-white text-center text-base self-stretch w-full mb-8">
                {subtitle}
            </p>

            <button
                className="w-fit mb-10 select-none rounded-lg bg-amber-300 p-2 text-center align-middle font-sans text-lg font-medium uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
            >
                {buttonText}
            </button>

            <ul className="font-normal text-xs mb-56">
                {features.map((feature, index) => (
                    <li key={index} className="mb-2 text-white">
                        * {feature}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default GetEstates;
