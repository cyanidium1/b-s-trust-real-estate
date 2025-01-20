import { Suspense } from "react";

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ lang, setLang, data }) => {
  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main>
        <Suspense fallback={<p>loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer data={data.footer} />
    </>
  );
};

export default Layout;
