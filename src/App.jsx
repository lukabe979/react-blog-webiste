import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <MainRoutes />
    </Router>
  );
}
export default App;
