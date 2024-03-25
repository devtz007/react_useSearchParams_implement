/* Import Native Modules */
import React, { useEffect, useState } from "react";

/* Import Custom Components */
import Header3Sec from "@/sections/header/header_3/header_3_section";
import Pagination1PagePart from "./components/pagination/pagination_1/pagination_1-pagePart";


const AppContainer = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerElem = document.querySelector("header");
    if (headerElem) {
      setHeaderHeight(headerElem.offsetHeight);
    }
  }, []);


  return (
    <>
      <Header3Sec />
      <main style={{ "--header-height": `${headerHeight}px` }}>
        <Pagination1PagePart />
      </main>
    </>
  );
};

const App = () => (
  <Router>
    <AppContainer />
  </Router>
);

export default App;
