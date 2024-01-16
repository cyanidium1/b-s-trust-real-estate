import React from 'react';
import GetEstates from './GetEstates';
import AlbaniaMap from './AlbaniaMap';
import Tour from './Tour';
import InvestForm from './InvestForm';
import Contacts from './Contacts';

function Main({ data }) {
    return (
        <main>
            <GetEstates data={data.getEstates} />
            <AlbaniaMap data={data.albaniaMap} />
            <Tour data={data.tour} />
            <InvestForm data={data.investForm} />
            <Contacts data={data.contacts} />
        </main>
    );
}

export default Main;