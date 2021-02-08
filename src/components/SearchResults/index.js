import React from "react";
import "./style.css";

function SearchResults(props) {
  console.log("search results  ", props.results)
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Employee" src={result.picture.thumbnail} className="img-fluid" />
          <span>
          <h3>{result.name.title +". " + result.name.first + " " + result.name.last}</h3>
            </span>
            <span>
              {result.location.city + ", " + result.location.state}
            </span>
            <br/>
            <span>
              {result.phone}
            </span>
            <br/>
            <span>
              {result.email}
            </span>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
