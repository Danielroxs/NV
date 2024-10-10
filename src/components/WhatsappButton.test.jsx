import { render, screen } from "@testing-library/react";
import WhatsappButton from "./WhatsappButton";
import React from "react";

test("renders the WhatsappButton Component", () => {
  render(<WhatsappButton />);

  const linkElement = screen.getByLabelText("Whatsapp button");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute(
    "href",
    "https://wa.me/525561706548?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios."
  );
});
