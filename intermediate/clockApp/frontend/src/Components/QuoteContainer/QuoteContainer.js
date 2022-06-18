import React, { useState, useEffect } from "react";
import {
  dataStorage,
  arrOfQuotes,
  getRandomInitialQuote,
} from "../../api/storage";
import { makeApiCall } from "../../helperFunc";
const url = "https://programming-quotes-api.herokuapp.com/Quotes/random";

const { author, en } = getRandomInitialQuote(arrOfQuotes);

function Quote(props) {
  // make api call to "https://programming-quotes-api.herokuapp.com/Quotes/random" in this component
  const initialQuoteValue = {
    quote: en,
    author,
  };
  const [quoteObj, useQuote] = useState(initialQuoteValue);
  // useEffect(() => {
  //   makeApiCall(url).then(function getQuote(response) {
  //     response.status == 200
  //       ? useQuote((prevValues) => {
  //           return {
  //             ...prevValues,
  //             quote: response.data.en,
  //             author: response.data.author,
  //           };
  //         })
  //       : console.log("Oops");
  //   });
  // }, []);
  return (
    <div className="top-container">
      <div className="quote-wrapper">
        <blockquote className="quote">{`${quoteObj.quote}`}</blockquote>
        <span className="author">{quoteObj.author}</span>
      </div>
      <button
        aria-label="generate new quote"
        onClick={refreshQuoteBtn.bind({ quoteObj, useQuote })}
        className="refresh-icon-btn"
      >
        {/* svg */}
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z"
            fill="#FFF"
            fillRule="nonzero"
            opacity=".5"
          />
        </svg>
      </button>
    </div>
  );
}

function refreshQuoteBtn(event) {
  makeApiCall(url).then((response) => {
    response.status == 200
      ? this.useQuote((prevValues) => {
          return {
            ...prevValues,
            quote: response.data.en,
            author: response.data.author,
          };
        })
      : null;
  });
}

export default Quote;
