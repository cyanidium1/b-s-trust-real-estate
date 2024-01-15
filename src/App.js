import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState('ua')
  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <Main lang={lang} />
      <Footer lang={lang} />
    </>
  );
}

export default App;
