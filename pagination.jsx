import React from "react";
import { BrowserRouter as Router, useSearchParams, useNavigate } from "react-router-dom";

const Pagination1PagePart = () => {
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const pageCount = 10;
  const pageElements = [];
  const navigate = useNavigate();

  const handlePageClick = (pageNumber) => {
    // Update the URL with the new page number
    /*const url = new URL(window.location.href);
    url.searchParams.set("filter_results_page", pageNumber);
    window.history.replaceState({}, "", url);*/

    setSearchParams({ q: pageNumber });
    //navigate(`/search?q=10`);
  };

  for (let index = 0; index < pageCount; index++) {
    const pageNumber = index + 1;
    pageElements.push(
      <li key={index} onClick={() => handlePageClick(pageNumber)}>
        {pageNumber}
      </li>
    );
  }

  return (
    <section className='pagination'>
      <div className='width-wrapper'>
        <ul>{pageElements}</ul>
      </div>
    </section>
  );
};

export default Pagination1PagePart;
