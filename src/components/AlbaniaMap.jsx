import React from 'react';
import albaniaMap from '../images/albania-map.webp';

const AlbaniaMap = () => {
    return (
        <section
            className="p-4 bg-gradient-to-b from-[#9fd8d8] to-[#fdfaec]">
            <h2 className="text-xl text-center font-semibold">
                Почему АЛБАНИЯ?
            </h2>
            <div style={{
                backgroundImage: `url(${albaniaMap})`,
                backgroundPosition: 'center, center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
            }}>

                <ul className="flex flex-col mt-16 mb-8">
                    <li className="w-fit mb-16 self-start bg-white rounded-3xl py-2 px-3">
                        Самая дешевая недвижимость на Адриатике
                    </li>
                    <li className="w-fit mb-16 self-end bg-white rounded-3xl py-2 px-3">
                        Безопасная страна
                    </li>
                    <li className="w-fit mb-16 self-start bg-white rounded-3xl py-2 px-3">
                        300 дней в году солнце
                    </li>
                    <li className="w-fit mb-16 self-end bg-white rounded-3xl py-2 px-3">
                        Экологичные продукты питания
                    </li>
                    <li className="w-fit mb-16 self-start bg-white rounded-3xl p-2">
                        Благоприятный климат
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default AlbaniaMap;
