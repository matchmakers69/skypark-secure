import React, { useState, useEffect } from "react";
import { fetchTrendingGifs as getGifsTrendy } from "utils/gifs";
import { renderError } from "utils/gifs";
import SearchGifsList from "components/Gifs/GifsList";
import Pagination from "components/Pagination";
import { Styled } from "styles/grid";

const Trendy = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchTrendingGifs = async currentOffset => {
      setLoading(true);
      try {
        const objResult = await getGifsTrendy(currentOffset);
        const { total_count } = objResult.pagination;
        setTotalResults(total_count);

        setGifs(
          objResult.data.map(gif => {
            return gif.images.fixed_height.url;
          })
        );
        setLoading(false);
      } catch (err) {
        setError(true);
        setTimeout(() => setError(false), 4000);
        setLoading(false);
      }
    };
    fetchTrendingGifs(currentOffset);
  }, [currentOffset]);

  const handlePaginationButtonClick = direction => {
    let offset = currentOffset;
    offset = direction === "next" ? (offset += 25) : (offset -= 25);
    setCurrentOffset(offset);
  };

  if (loading) return <span>loading gifs...</span>;
  return (
    <>
      {renderError(error)}
      {gifs.length && (
        <Pagination offset={currentOffset} totalResults={totalResults} onClick={handlePaginationButtonClick} />
      )}

      <Styled.Container data-testid="trendyContainer">
        <h2>Trendy gifs:</h2>
        <SearchGifsList gifs={gifs} />
      </Styled.Container>
    </>
  );
};

export default Trendy;
