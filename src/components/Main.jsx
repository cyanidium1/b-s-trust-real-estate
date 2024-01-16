import React from 'react';
import GetEstates from './GetEstates';
import AlbaniaMap from './AlbaniaMap';
import Tour from './Tour';
import InvestForm from './InvestForm';
import Contacts from './Contacts';

function Main({ data, lang }) {
    return (
        <main>
            <GetEstates data={data.getEstates} lang={lang} />
            <AlbaniaMap data={data.albaniaMap} />
            <Tour data={data.tour} />
            <InvestForm data={data.investForm} modal={data.investModal} />
            <Contacts data={data.contacts} />
        </main>
    );
}

export default Main;