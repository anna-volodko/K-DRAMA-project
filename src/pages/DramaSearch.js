import React, { useState } from "react";
import axios from "axios";
import { Pagination } from "@mui/material";

export default function DramaSearch() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  const searchDramas = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/multi",
        {
          params: {
            api_key: "a80e9550bcc216e373c39f9aeaf8ffd4",
            language: "ko",
            query: searchText,
            include_adult: false,
            region: "KO",
          },
        }
      );
      setResults(response.data.results);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    searchDramas();
  };
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const changePageHandler = (event, newPage) => {
    setPage(newPage);
  };
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentResults = results.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="container search">
      <p className="search_text">Start your k-drama journey today:</p>
      <form className="search_form" onSubmit={searchHandler}>
        <input
          className="search_input"
          type="text"
          placeholder="Enter K-Drama title"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search_button" type="submit">
          <img src="./assets/search_icon.svg" alt="" className="icon_search" />
          Search
        </button>
      </form>
      <div className="results_list">
        {currentResults.map((item) => (
          <div className="card" key={item.id}>
            <p className="card_title">{item.title || item.name}</p>
            {item.poster_path && (
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
              />
            )}
            <div className="card_bottom">
              <div className="runtime">
                <img src="../assets/time.svg" alt="time" className="time_img" />
                <p>125m</p>
              </div>
              <p className="release_date">
                {(item.release_date &&
                  new Date(item.release_date).getFullYear()) ||
                  new Date(item.first_air_date).getFullYear()}
              </p>
            </div>
          </div>
        ))}
      </div>
      {results.length > 0 && (
        <Pagination
          className="pagination"
          count={Math.ceil(results.length / itemsPerPage)}
          page={page}
          onChange={changePageHandler}
          variant="outlined"
          shape="rounded"
          size="large"
          siblingCount={1}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#ff9aab",
              borderColor: "#ff9aab",
              background: "#ff9aab28",
              borderRadius: '25px'
            },
          }}
        />
      )}
    </section>
  );
}
