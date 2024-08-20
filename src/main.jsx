import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";

const muiTheme = createTheme({});

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <MUIThemeProvider theme={muiTheme}>
      <App />
    </MUIThemeProvider>
  </ChakraProvider>
);
