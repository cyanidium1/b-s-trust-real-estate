import React, { useState } from 'react';
import GetEstates from './GetEstates';
import AlbaniaMap from './AlbaniaMap';
import Tour from './Tour';
import InvestForm from './InvestForm';
import Contacts from './Contacts';
import Modal from './Modal';

function Main({ data, lang }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <main>
            <GetEstates data={data.getEstates} lang={lang} setIsModalThanksOpen={setIsModalOpen} />
            <AlbaniaMap data={data.albaniaMap} />
            <Tour data={data.tour} />
            <InvestForm data={data.investForm} setIsModalOpen={setIsModalOpen} lang={lang} />
            <Contacts data={data.contacts} />
            {isModalOpen && <Modal modal={data.investModal} onClose={closeModal} />}

        </main>
    );
}

export default Main;