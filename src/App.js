import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState(getDefaultLanguage());
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  function getDefaultLanguage() {
    const browserLanguage = navigator.language || navigator.userLanguage;
    return browserLanguage.split('-')[0];
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (['ua', 'ru', 'en', 'pl', 'it', 'cz'].includes(lang)) {
          const jsonData = require(`../src/text-content/${lang}.json`);
          setData(jsonData);
          setLoading(false);
        } else {
          const jsonData = require(`../src/text-content/en.json`);
          setData(jsonData);
          setLoading(false);
        }

      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  // Повернути null, якщо дані ще завантажуються
  if (loading) {
    return null;
  }

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <Main data={data} lang={lang} />
      <Footer data={data.footer} />
    </>
  );
}

export default App;
