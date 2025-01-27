import React, { useState, useEffect } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
const HomePage = lazy(() => import("./components/views/Home"));
const ThanksPage = lazy(() => import("./components/views/Thanks"));
const SurveyPage = lazy(() => import("./components/views/SurveyPage"));

function App() {
  const [lang, setLang] = useState(getDefaultLanguage());
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  function getDefaultLanguage() {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const supportedLanguages = ["ua", "ru", "en", "pl", "it", "cz"];
    const defaultLanguage = "ru";

    const language = browserLanguage.split("-")[0];
    return supportedLanguages.includes(language) ? language : defaultLanguage;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (["ua", "ru", "en", "pl", "it", "cz"].includes(lang)) {
          const jsonData = require(`../src/text-content/${lang}.json`);
          setData(jsonData);
          setLoading(false);
        } else {
          const jsonData = require(`../src/text-content/en.json`);
          setData(jsonData);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error loading data:", error);
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
    <Routes>
      <Route
        path="/"
        element={<Layout lang={lang} setLang={setLang} data={data} />}
      >
        <Route index element={<HomePage data={data} lang={lang} />} />
        <Route path="quiz" element={<SurveyPage lang={lang} />} />
        <Route path="thanks" element={<ThanksPage data={data} />} />

        <Route path="*" element={<HomePage data={data} lang={lang} />} />
      </Route>
    </Routes>
  );
}

export default App;
