import React from 'react';
import logo from '../images/logoBig.webp'

const Contacts = () => {
    return (
        <div className=" bg-[#FDFAEC] py-4">
            <div className="w-full flex flex-col justify-center items-center">
                <img className="object-contain object-center w-36 overflow-hidden self-center max-w-full" src={logo} alt="Logo" />

                <p className="text-slate-950 text-center text-sm font-bold mt-4">
                    Недвижимость
                </p>

                <p className="text-slate-950 text-center text-sm font-bold mt-2">
                    Инвестиционный Тур
                </p>

                <p className="text-slate-950 text-center text-sm font-bold mt-2 mb-8">
                    Районы Албании
                </p>

                <div className="flex justify-between items-stretch px-5">
                    <div className="items-center flex justify-between gap-2">
                        <p>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_347)">
                                    <g clip-path="url(#clip1_1_347)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.63296 4.21808C3.63296 4.21808 3.59296 4.26142 3.54046 4.31308C3.3388 4.50892 2.9213 4.91642 2.91708 5.76892C2.91046 6.96142 3.69463 9.17558 7.47046 12.9505C11.2288 16.7072 13.4396 17.5005 14.6346 17.5005H14.6522C15.5046 17.4964 15.9113 17.0781 16.1079 16.8772C16.1679 16.8155 16.2163 16.7705 16.2505 16.7422C17.0805 15.9072 17.5055 15.2855 17.5013 14.8872C17.4955 14.4805 16.9896 13.9998 16.2905 13.3348C16.0679 13.1231 15.8263 12.8931 15.5713 12.6381C14.9105 11.9789 14.5829 12.0914 13.8629 12.3448C12.8672 12.6939 11.5005 13.1689 9.37713 11.0447C7.25046 8.91975 7.72629 7.55475 8.07463 6.55892C8.3263 5.83892 8.4413 5.51058 7.77963 4.84892C7.52046 4.59058 7.28796 4.34558 7.0738 4.12058C6.41296 3.42558 5.9363 2.92308 5.53213 2.91725H5.52546C5.1263 2.91725 4.5063 3.34392 3.6288 4.22142C3.6313 4.21892 3.63296 4.21808 3.63296 4.21808ZM14.6355 18.7505C12.5588 18.7505 9.8513 17.0972 6.58713 13.8348C3.31046 10.5589 1.65463 7.84308 1.66706 5.76225C1.67463 4.38725 2.39546 3.68308 2.6663 3.41892C2.68046 3.40142 2.7288 3.35392 2.74546 3.33725C3.94046 2.14142 4.7463 1.65808 5.54796 1.66712C6.4788 1.67975 7.1413 2.37642 7.97963 3.25892C8.18713 3.47725 8.41213 3.71475 8.66296 3.96475C9.87963 5.18142 9.53296 6.17392 9.25463 6.97058C8.95129 7.83975 8.6888 8.58975 10.2605 10.1614C11.8338 11.7331 12.5838 11.4705 13.4496 11.1648C14.2472 10.8864 15.2372 10.5381 16.4555 11.7548C16.7022 12.0014 16.9363 12.2239 17.1522 12.4298C18.0388 13.2722 18.7388 13.9381 18.7506 14.8714C18.7605 15.6672 18.2772 16.4781 17.0838 17.6722L16.5555 17.3139L17.0022 17.7505C16.7379 18.0214 16.0346 18.7431 14.6588 18.7505H14.6355Z" fill="#002D4F" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_347">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_1_347">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </p>
                        <a href="tel:+380 93 512 85 47" className="text-slate-950 text-sm font-medium grow whitespace-nowrap hover:text-red-300 hover:scale-105 transition-transform duration-300">
                            +380 93 512 85 47
                        </a>

                        <p>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_353)">
                                    <g clip-path="url(#clip1_1_353)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.208 1.66699C13.9988 1.66699 17.0831 4.7745 17.0831 8.5945C17.0831 13.2904 11.7031 17.917 10.208 17.917C8.71301 17.917 3.33301 13.2904 3.33301 8.5945C3.33301 4.7745 6.41718 1.66699 10.208 1.66699ZM10.208 2.91699C7.10634 2.91699 4.58301 5.4645 4.58301 8.5945C4.58301 12.577 9.26967 16.457 10.208 16.6636C11.1463 16.4562 15.8331 12.5762 15.8331 8.5945C15.8331 5.4645 13.3097 2.91699 10.208 2.91699ZM10.2088 5.83367C11.7022 5.83367 12.9172 7.04867 12.9172 8.54283C12.9172 10.0362 11.7022 11.2504 10.2088 11.2504C8.7155 11.2504 7.50051 10.0362 7.50051 8.54283C7.50051 7.04867 8.7155 5.83367 10.2088 5.83367ZM10.2088 7.08367C9.40467 7.08367 8.75051 7.73783 8.75051 8.54283C8.75051 9.34699 9.40467 10.0003 10.2088 10.0003C11.0131 10.0003 11.6672 9.34699 11.6672 8.54283C11.6672 7.73783 11.0131 7.08367 10.2088 7.08367Z" fill="#002D4F" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_353">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_1_353">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </p>

                        <a href="https://maps.app.goo.gl/yjVAhm7VPZNqnm3x7" target="_blank" rel="noreferrer" className="hover:text-red-300 hover:scale-105 transition-transform duration-300 justify-center text-slate-950 text-sm font-medium grow whitespace-nowrap">
                            Durrës, Albania
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
