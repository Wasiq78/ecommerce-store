import ReactDOM from 'react-dom/client'; 
import { AppProvider } from "./Context/AppProvider";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
);
