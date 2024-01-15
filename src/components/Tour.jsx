import React from 'react';
import bgTour1 from '../images/bgTour1@2x.webp';
import bgTour2 from '../images/bgTour2@2x.webp';
import bgTour3 from '../images/bgTour3@2x.webp';

const Tour = () => {
    return (

        <section className='w-full bg-gradient-to-b from-[#FDFAEC] to-[#7ba5d3] '>

            <div className='p-2'>
                <h2 className='text-2xl font-bold text-center'>Инвестиционный тур
                    в Албанию</h2>
                <p className=' text-center'>Бесплатный ознакомительный тур по
                    недвижимости в Албании</p>
            </div>

            <div class="w-full p-2">
                <div class="flex space-x-2">
                    <p class="text-xl">01.</p>
                    <h3 class="text-xl font-bold">Тур до 5 дней</h3>
                </div>
                <p class="text-base">Экскурсии и прогулки по городу
                    Осмотр школ и университетов</p>
            </div>

            <img src={bgTour1} alt="Tour 1" />

            <div class="w-full p-2 flex flex-col justify-end">
                <div class="flex space-x-2 self-end">
                    <p class="text-xl">02.</p>
                    <h3 class="text-xl font-bold">Удобные для Вас даты</h3>
                </div>
            </div>
            <div class="w-full p-2">
                <div class="flex space-x-2">
                    <p class="text-xl">03.</p>
                    <h3 class="text-xl font-bold">Встреча в аэропорту</h3>
                </div>
            </div>

            <div className='flex justify-end'>
                <img src={bgTour2} alt="Tour 2" />
            </div>

            <div class="w-full p-2 flex flex-col justify-end">
                <div class="w-fit ml-auto">
                    <div class="flex space-x-2 w-fit">
                        <p class="text-xl">04.</p>
                        <h3 class="text-xl font-bold">Трансфер аэропорт/отель/аэропорт</h3>
                    </div>
                    <p class="text-base w-fit">Консультация по оформлению
                        сделки по недвижимости</p>
                </div>
            </div>

            <div class="w-full p-2">
                <div class="flex space-x-2">
                    <p class="text-xl">05.</p>
                    <h3 class="text-xl font-bold">Размещение в комфортных апартаментах</h3>
                </div>
                <p class="text-base">Открытие банковского счета</p>
            </div>

            <img src={bgTour3} alt="Tour 3" />

            <div class="w-full p-2 flex flex-col justify-end">
                <div className='w-fit ml-auto'>
                    <div class="flex space-x-2">
                        <p class="text-xl">06.</p>
                        <h3 class="text-xl font-bold">Осмотр лучших объектов недвижимости под ваши цели</h3>
                    </div>
                    <div class="ml-auto">
                        <p class="text-base">Услуги адвоката </p>
                        <p class="text-base">Получение вида на жительство</p>
                    </div>
                </div>
            </div>


        </section>

    );
};

export default Tour;
