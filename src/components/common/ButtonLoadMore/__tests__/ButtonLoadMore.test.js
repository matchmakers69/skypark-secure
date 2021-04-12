import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import ButtonLoadMore from "../../ButtonLoadMore";

afterEach(cleanup);

const defaultProps = {
  onClick: jest.fn(),
  text: "Learn more gifs",
  disabled: false,
};

describe("<ButtonLoadMore />", () => {
  test("check if ButtonLoad component exists", () => {
    render(
      <ThemeProvider theme={theme}>
        <ButtonLoadMore {...defaultProps} />
      </ThemeProvider>
    );
    const buttonLoad = screen.getByTestId("loadMore");

    expect(buttonLoad).toBeInTheDocument();
  });

  test("calls function on Button Click", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonLoadMore {...defaultProps} onClick={onClick} />
      </ThemeProvider>
    );
    fireEvent.click(getByText(defaultProps.text));
    expect(onClick).toHaveBeenCalled();
  });
});
