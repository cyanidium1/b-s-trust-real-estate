import React from 'react';
import albaniaMap from '../images/albania-map.webp';

const AlbaniaMap = ({ data }) => {
    const { title, features } = data;

    return (
        <section className="p-4 bg-gradient-to-b from-[#9fd8d8] to-[#fdfaec] md:px-56">
            <h2 className="text-xl text-center font-semibold">
                {title}
            </h2>

            <div
                style={{
                    backgroundImage: `url(${albaniaMap})`,
                    backgroundPosition: 'center, center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <ul className="flex flex-col mt-16 mb-8">
                    {features.map((item, index) => (
                        <li
                            key={index}
                            className={`w-fit mb-16 self-${index % 2 === 0 ? 'end' : 'start'} bg-white rounded-3xl py-2 px-3`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default AlbaniaMap;
