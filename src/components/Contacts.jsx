import React from 'react';
import logo from '../images/logoBig.webp';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contacts = ({ data }) => {
    const { logoAltText, realEstateText, investmentTourText, regionsText, locationIcon } = data;

    return (
        <div className=" bg-[#FDFAEC] py-4">
            <div className="w-full flex flex-col justify-center items-center">
                <img className="object-contain object-center w-36 overflow-hidden self-center max-w-full" src={logo} alt={logoAltText} />

                <p className="text-slate-950 text-center text-sm font-bold mt-4">
                    {realEstateText}
                </p>

                <p className="text-slate-950 text-center text-sm font-bold mt-2">
                    {investmentTourText}
                </p>

                <p className="text-slate-950 text-center text-sm font-bold mt-2 mb-8">
                    {regionsText}
                </p>

                <div className="flex justify-between items-stretch px-5">
                    <div className="items-center flex justify-between gap-2">
                        <p>
                            <FaPhone />
                        </p>
                        <a href='tel:+355693122813' className="text-slate-950 text-sm font-medium grow whitespace-nowrap hover:text-red-300 hover:scale-105 transition-transform duration-300">
                            +355 69 312 2813
                        </a>

                        <p>
                            <FaMapMarkerAlt />
                        </p>

                        <a href={locationIcon.mapLink} target="_blank" rel="noreferrer" className="hover:text-red-300 hover:scale-105 transition-transform duration-300 justify-center text-slate-950 text-sm font-medium grow whitespace-nowrap">
                            {locationIcon.address}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
