import React from "react";
import { act, render, waitFor } from "@testing-library/react";
import Trendy from "../../Trendy";
import mockAxios from "axios";

afterEach(() => jest.resetAllMocks());

describe("<Trendy />", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("displays loading indicator", async () => {
    await act(async () => {
      const { getByText } = render(<Trendy />);
      expect(getByText(/loading/i)).toBeInTheDocument();
    });
  });
  test("displays gifs data", async () => {
    mockAxios.get.mockResolvedValueOnce({
      data: [
        {
          type: "gif",
          id: "qcYgzFuKBAUE",
        },
      ],
    });

    await act(async () => {
      const { getByTestId } = render(<Trendy />);

      const gifsInfo = await waitFor(() => getByTestId("trendyContainer"));
      expect(gifsInfo).toHaveTextContent("Trendy gifs:");
    });
  });
});
