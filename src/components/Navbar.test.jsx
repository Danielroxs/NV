import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import React from "react";

test("renders the Navbar Component", () => {
  render(<Navbar />);
  const navbarElement = screen.getByRole("navigation");
  expect(navbarElement).toBeInTheDocument();
});
