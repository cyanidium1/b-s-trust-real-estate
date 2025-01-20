import React from "react";
import GetEstates from "../GetEstates";
import AlbaniaMap from "../AlbaniaMap";
import Tour from "../Tour";
import InvestForm from "../InvestForm";
import Contacts from "../Contacts";

function Home({ data, lang }) {
  return (
    <>
      <GetEstates data={data.getEstates} lang={lang} />
      <AlbaniaMap data={data.albaniaMap} />
      <Tour data={data.tour} />
      <InvestForm data={data.investForm} lang={lang} />
      <Contacts data={data.contacts} />
    </>
  );
}

export default Home;
