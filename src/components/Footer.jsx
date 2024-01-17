import React from 'react';
import { FaWhatsapp, FaTiktok, FaTelegram, FaFacebook, FaYoutube } from 'react-icons/fa';
import bg from '../images/stairs.webp';

function Footer({ data }) {
    const { subscribeTitle, socialMedia, subscriptionBenefits, youtubeLink, tiktokLink, we } = data;

    function getSocialMediaIcon(icon, color, size) {
        switch (icon) {
            case 'whatsapp':
                return <FaWhatsapp size={size} style={{ color }} />;
            case 'telegram':
                return <FaTelegram size={size} style={{ color }} />;
            case 'facebook':
                return <FaFacebook size={size} style={{ color }} />;
            default:
                return null;
        }
    }

    return (
        <footer>
            {/* made by https://github.com/cyanidium1 */}

            <div className='relative' style={{
                backgroundImage: `url('${bg}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                {/* Градиент */}
                <div className="top-[-1px] absolute inset-0 bg-gradient-to-b from-[#FDFAEC] to-transparent h-1/4"></div>
                {/* Контент */}
                <div className="flex justify-center items-center p-8 pb-1">
                    <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm flex flex-col rounded-md items-center p-6 w-fit">
                        <p className="text-slate-950 text-center text-base font-medium mb-8">
                            {subscribeTitle}
                        </p>
                        <div className="flex flex-row gap-10 mb-8">
                            {socialMedia.map((social, index) => (
                                <a key={index} className='hover:scale-110 transition-transform duration-300' target="_blank" href={social.link} rel="noreferrer">
                                    {getSocialMediaIcon(social.icon, social.color, 40)}
                                </a>
                            ))}
                        </div>

                        <div className="flex flex-col justify-start"></div>
                        <ul className="text-slate-950 text-sm w-64 list-disc font-normal flex flex-col gap-4">
                            {subscriptionBenefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                        <div className='flex justify-between space-x-2'>
                            <a
                                href={youtubeLink}
                                target="_blank"
                                rel="noreferrer"
                                className="text-white text-center text-lg no-underline rounded bg-red-500 self-center mt-4 p-2 px-3 flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
                            >
                                <FaYoutube size={50} color="white" />
                                <span>{we} YouTube</span>
                            </a>
                            <a
                                href={tiktokLink}
                                target="_blank"
                                rel="noreferrer"
                                className="text-white text-center text-lg no-underline rounded bg-blue-gray-900 self-center mt-4 p-2 px-3 flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
                            >
                                <FaTiktok size={50} color="white" />
                                <span>{we} TikTok</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <a className='text-xs' href="https://github.com/cyanidium1" target="_blank" rel="noopener noreferrer">made on earth by cyanidium</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
