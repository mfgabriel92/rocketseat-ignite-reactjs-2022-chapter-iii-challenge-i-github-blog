import { ChakraProvider } from "@chakra-ui/react";
import { defaultTheme } from "@themes/default";
import { Router } from "Router";
import { IssueProvider } from "contexts/IssuesContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={defaultTheme}>
      <BrowserRouter>
        <IssueProvider>
          <Router />
        </IssueProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
