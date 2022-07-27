import "./App.css";
import Home from "./Home";
import Offers from "./Offers";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const axios = require("axios");

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading === true ? (
    <h1>En cours de chargement</h1>
  ) : (
    <Router>
      <nav>Ma Navigation</nav>
      <Link data={data} to="/home">
        Home
      </Link>
      <br />
      <Link to="/Offers">Offers</Link>
      <Routes>
        <Route>
          <Route path="/Home" element={<Home data={data} />} />
          <Route path="/Offers/:offerId" element={<Offers data={data} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
