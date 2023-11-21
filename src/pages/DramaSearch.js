import React, { useState } from "react";
import { Pagination } from "@mui/material";
import DescriptionModal from "./DescriptionModal";
import { searchMedia } from "./Api";

export default function DramaSearch() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [chosenDrama, setChosenDrama] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchDramas = async () => {
    try {
      const data = await searchMedia(searchText);
      setResults(data);
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

  const openModal = (drama) => {
    setChosenDrama(drama);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
          <div className="card" key={item.id} onClick={() => openModal(item)}>
            <p className="card_title">{item.title}</p>
              <img className="poster" src={item.poster} alt={item.name} />
            <div className="card_bottom">
              <div className="runtime">
                <img src="../assets/time.svg" alt="time" className="time_img" />
                <p>125m</p>
              </div>
              <p className="release_date">{item.releaseYear}</p>
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
              borderRadius: "25px",
            },
          }}
        />
      )}
      {chosenDrama && (
        <DescriptionModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          drama={chosenDrama}
        />
      )}
    </section>
  );
}
