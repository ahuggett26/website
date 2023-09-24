import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";

test("renders header title", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  const headerTitle = screen.getByText(/ahuggett.uk/i);
  expect(headerTitle).toBeInTheDocument();
});
