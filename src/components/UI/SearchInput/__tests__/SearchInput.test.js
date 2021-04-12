import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import SearchInput from "../../SearchInput";

afterEach(cleanup);

const defaultProps = {
  onSubmit: jest.fn(),
  initialTerm: "models",
};

describe("<SearchInput />", () => {
  test("renders element by placeholder", () => {
    const placeholderText = "Search gifs...";

    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <SearchInput {...defaultProps} />
      </ThemeProvider>
    );
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });

  test("displays proper value", () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <SearchInput />
      </ThemeProvider>
    );
    const input = getByPlaceholderText("Search gifs...");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: defaultProps.initialTerm } });
    expect(input).toHaveValue("models");
  });

  test("renders submit button", async () => {
    const mockSubmit = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <SearchInput onSubmit={mockSubmit} {...defaultProps} />
      </ThemeProvider>
    );

    const submitButtom = screen.getByText(/search/i);
    expect(submitButtom).toBeInTheDocument();
  });
});
