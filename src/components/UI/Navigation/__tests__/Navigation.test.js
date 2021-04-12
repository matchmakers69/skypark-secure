import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../../Navigation";

const renderWithRouter = component => {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <Router>{component}</Router>
      </ThemeProvider>
    ),
  };
};

describe("<Navigation>", () => {
  test("render navigation links", () => {
    const { getByTestId } = renderWithRouter(<Navigation />);
    const navigationList = getByTestId("navigationList");

    const linkTrending = screen.getByText(/trendy gifs/i);
    const linkSearch = screen.getByText(/search gifs/i);

    expect(linkTrending).toBeInTheDocument();
    expect(linkSearch).toBeInTheDocument();
    expect(navigationList).toContainElement(linkTrending);
    expect(navigationList).toContainElement(linkSearch);
  });
});
