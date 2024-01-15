import React from 'react';
import GetEstates from './GetEstates';
import AlbaniaMap from './AlbaniaMap';
import Tour from './Tour';
import InvestForm from './InvestForm';
import Contacts from './Contacts';

function Main({ lang }) {
    return (
        <main>
            <GetEstates lang={lang} />
            <AlbaniaMap lang={lang} />
            <Tour lang={lang} />
            <InvestForm lang={lang} />
            <Contacts lang={lang} />
        </main>
    );
}

export default Main;