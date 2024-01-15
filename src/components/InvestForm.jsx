import React from 'react';
import bg from '../images/house.webp'
import { Button, Input } from '@material-tailwind/react';

const InvestForm
    = () => {
        return (
            <div className="h-[680px] relative">
                <img src={bg} alt="bg-palms" className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} />

                {/* Градиент */}
                <div className="absolute top-[-1px] inset-0 bg-gradient-to-b from-[#7ba5d3] to-transparent h-1/4"></div>
                <div className="absolute bottom-[-1px] w-full bg-gradient-to-b from-transparent to-[#FDFAEC] h-1/4"></div>

                {/* Контент */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
                    <h2 id="formTitle" className="text-slate-950 text-center text-2xl font-bold whitespace-nowrap mt-6" aria-label="Form Title">
                        Форма заявки
                    </h2>

                    <div className="items-start backdrop-blur-lg bg-white self-stretch flex flex-col mt-9 mb-5 p-4 rounded-2xl">
                        <p className="text-slate-950 text-center text-sm font-medium" aria-label="Form Description">
                            Оставьте заявку и наш эксперт свяжется с Вами
                        </p>

                        <div className="w-full my-4">
                            <Input label="Name" />
                        </div>

                        <div className="w-full">
                            <Input label="Phone" />
                        </div>

                        <Button className="mt-4" fullWidth>
                            Отправить заявку
                        </Button>
                    </div>
                </div>
            </div>
        );
    };

export default InvestForm
    ;
