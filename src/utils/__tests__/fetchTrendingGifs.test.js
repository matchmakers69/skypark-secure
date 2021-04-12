import mockAxios from "axios";
import { fetchTrendingGifs } from "../gifs";

it("calls fetching trending gifs", async () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: [
        {
          type: "gif",
          id: "qcYgzFuKBAUE",
        },
      ],
    })
  );
  const gifs = await fetchTrendingGifs();
  expect(gifs).toEqual([
    {
      type: "gif",
      id: "qcYgzFuKBAUE",
    },
  ]);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});
