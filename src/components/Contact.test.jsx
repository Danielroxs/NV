import { screen, render, fireEvent } from "@testing-library/react";
import ContactForm from "./Contact";
import React from "react";

test("shows validation errors when form is submitted without required fields", () => {
  render(<ContactForm />);

  const submitButton = screen.getByRole("button", { name: /enviar mensaje/i });

  // Simular el envío del formulario sin llenar los campos
  fireEvent.click(submitButton);

  // Verificar que los campos aún están vacíos
  expect(screen.getByPlaceholderText(/nombre completo/i).value).toBe("");
  expect(screen.getByPlaceholderText(/correo electrónico/i).value).toBe("");
  expect(screen.getByPlaceholderText(/número de teléfono/i).value).toBe("");
  expect(screen.getByPlaceholderText(/mensaje/i).value).toBe("");
});
