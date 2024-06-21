import { BrowserRouter } from "react-router-dom";
import AppRoute from "./Routes/AppRoute";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <AppRoute />
        </BrowserRouter>
    );
}

export default App;
