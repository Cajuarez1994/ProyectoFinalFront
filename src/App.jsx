import { BrowserRouter } from "react-router-dom";
import RoutesView from "./routes/RoutesView";
import "./css/App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RoutesView />
      </BrowserRouter>
    </>
  );
};

export default App;
