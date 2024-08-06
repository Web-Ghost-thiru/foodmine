import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <AppRoutes />
    </BrowserRouter>
    </>
  );
}

export default App;
