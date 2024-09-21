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
  <MUIThemeProvider theme={muiTheme}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </MUIThemeProvider>
);
