import React from 'react';
import GetEstates from './GetEstates';
import AlbaniaMap from './AlbaniaMap';

function Main({ lang }) {
    return (
        <main>
            <GetEstates lang={lang} />
            <AlbaniaMap lang={lang} />
        </main>
    );
}

export default Main;