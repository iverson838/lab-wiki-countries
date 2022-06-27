import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(data);
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <CountriesList countries={countries} />
          </div>
          <div className="col">
            <Routes>
              <Route
                path="/country/:id"
                element={<CountryDetails countries={countries} />}
              />
              {/* React-Router Route rendering the CountryDetails should go here */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
