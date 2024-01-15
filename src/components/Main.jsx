import React from 'react';
import GetEstates from './GetEstates';
import AlbaniaMap from './AlbaniaMap';
import Tour from './Tour';

function Main({ lang }) {
    return (
        <main>
            <GetEstates lang={lang} />
            <AlbaniaMap lang={lang} />
            <Tour lang={lang} />
        </main>
    );
}

export default Main;