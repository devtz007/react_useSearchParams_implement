import React from "react";
import { useSearchParams} from "react-router-dom";

const Pagination1PagePart = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageCount = 10;
  const pageElements = [];


  const handlePageClick = (pageNumber) => {

    setSearchParams({ q: pageNumber });

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
