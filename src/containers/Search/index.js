import React, { useState, useEffect, useCallback } from "react";
import { fetchGifsByTerm, GIFS_PART_QUANTITY } from "utils/gifs";
import { renderError } from "utils/gifs";
import SearchGifsList from "components/Gifs/GifsList";
import SearchInput from "components/UI/SearchInput";
import { Styled } from "styles/grid";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("models");
  const [totalCount, setTotalCount] = useState(0);

  const handleFetchGifsBySearchQuery = useCallback(async term => {
    setLoading(true);
    setError(false);

    try {
      // By default load with offset 0
      const objResult = await fetchGifsByTerm(0, term);

      const gifs = objResult.data.map(gif => {
        return gif.images.fixed_height.url;
      });

      setTotalCount(objResult.pagination.total_count);

      setGifs(gifs);
      setLoading(false);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 4000);
      setLoading(false);
    }
  }, []);

  const lodeMoreGifs = async () => {
    setLoading(true);
    setError(false);

    try {
      const objResult = await fetchGifsByTerm(gifs.length, searchTerm);

      const gifsToAppend = objResult.data.map(gif => {
        return gif.images.fixed_height.url;
      });

      setGifs(currentGifs => {
        return [...currentGifs, ...gifsToAppend]; // Increment lengtg of the array
      });

      setLoading(false);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 4000);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchGifsBySearchQuery(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchSubmit = term => {
    setSearchTerm(term);
    handleFetchGifsBySearchQuery(term);
  };

  const handleLoadMoreGifs = () => {
    lodeMoreGifs();
  };

  return (
    <>
      {renderError(error)}

      <SearchInput initialTerm={searchTerm} onSubmit={handleSearchSubmit} />
      <Styled.Container>
        <p>
          Displaying: {gifs.length} out of {totalCount}
        </p>
        <button disabled={gifs.length + GIFS_PART_QUANTITY > totalCount} onClick={handleLoadMoreGifs} type="button">
          Load more
        </button>

        {!loading && gifs.length > 0 && <SearchGifsList gifs={gifs} />}

        {loading && <span>Is loading...</span>}
      </Styled.Container>
    </>
  );
};

export default Search;
