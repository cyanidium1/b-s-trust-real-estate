import React from 'react';
import { FaWhatsapp, FaTiktok, FaTelegram, FaFacebook, FaYoutube } from 'react-icons/fa';
import bg from '../images/stairs.webp'

function Footer(props) {
    return (
        <footer>
            <div className='relative' style={{
                backgroundImage: `url('${bg}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>

                {/* Градиент */}
                <div className="top-[-1px] absolute inset-0 bg-gradient-to-b from-[#FDFAEC] to-transparent h-1/4"></div>
                {/* Контент */}
                <div className="flex justify-center items-center p-8">
                    <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm flex flex-col rounded-md items-center p-6 w-fit">
                        <p className="text-slate-950 text-center text-base font-medium mb-8">
                            Подпишитесь и будьте в курсе актуальных<br /> событий в мире недвижимости Албании!
                        </p>
                        <div className="flex flex-row gap-10 mb-8">
                            <a target="_blank" href="https://wa.me/qr/XXBDREVA66NMP1" rel="noreferrer">
                                <FaWhatsapp size={40} style={{ color: '#25D366' }} />
                            </a>
                            <a href="https://www.t.me/real_estate_al" target="_blank" rel="noreferrer">
                                <FaTelegram size={40} style={{ color: '#229ED9' }} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100069581861273&mibextid=9R9pXO" target="_blank" rel="noreferrer">
                                <FaFacebook size={40} style={{ color: '#1877F2' }} />
                            </a>
                        </div>

                        <div className="flex flex-col justify-start"></div>
                        <ul
                            className="text-slate-950 text-sm w-64 list-disc font-normal flex flex-col gap-4"
                        >
                            <li>Новости рынка недвижимости Албании</li>
                            <li>Оповещения о новых стартах продаж</li>
                            <li>Доступ к эксклюзивным объектам на этапе pre-sale</li>
                            <li>Инвестиционные предложения</li>
                        </ul>
                        <div className='flex justify-between space-x-2'>
                            <a
                                href="https://youtube.com/@albania_gid"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white text-center text-lg
                             no-underline rounded bg-red-500 self-center mt-4 p-2 px-3 flex items-center justify-center gap-2"
                            >
                                <FaYoutube size={50} color="white" />
                                <span>Мы в YouTube</span>
                            </a>
                            <a
                                href="https://www.tiktok.com/@real_estate_albania"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white text-center text-lg no-underline rounded bg-blue-gray-900 self-center mt-4 p-2 px-3 flex items-center justify-center gap-2"
                            >
                                <FaTiktok size={50} color="white" />
                                <span>Мы в TikTok</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;