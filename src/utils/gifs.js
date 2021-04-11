import axios from "axios";
import { URL } from "../api";

const API_KEY = "XChfGas8LB0JKSklwAiWFrWl9RWShzvT";
const GIFS_URL = URL.giphyBaseUrl;
export const GIFS_PART_QUANTITY = 50;

export const fetchTrendingGifs = async offset => {
  const response = await axios.get(`${GIFS_URL}/trending`, {
    params: {
      limit: GIFS_PART_QUANTITY,
      rating: "g",
      api_key: API_KEY,
      offset,
    },
  });
  return response.data;
};

export const fetchGifsByTerm = async (offset, term) => {
  const response = await axios.get(`${GIFS_URL}/search`, {
    params: {
      limit: GIFS_PART_QUANTITY,
      rating: "g",
      api_key: API_KEY,
      q: term,
      offset,
    },
  });
  return response.data;
};

export const renderError = error => {
  if (error) {
    return <div>Sorry some error occured</div>;
  }
  return null;
};

export const formValidate = inputValue => ({
  value: inputValue.length === 0 || inputValue.length <= 2,
});
