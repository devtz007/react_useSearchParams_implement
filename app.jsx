/* Import Native Modules */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useSearchParams} from "react-router-dom";

/* Import Custom Components */
import Header3Sec from "@/sections/header/header_3/header_3_section";
import Pagination1PagePart from "./components/pagination/pagination_1/pagination_1-pagePart";


const AppContainer = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const headerElem = document.querySelector("header");
    if (headerElem) {
      setHeaderHeight(headerElem.offsetHeight);
    }
  }, []);



  // Get a specific query parameter
  const queryParam = searchParams.get("q");
  console.log(queryParam);



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
