import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const countries = props.countries;
  const { id } = useParams();
  const country = countries.find((item) => {
    return item.alpha3Code === id;
  });
  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt={country.name.common}
      />
      <h1> {country.name.common}</h1>
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">Capital</th>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <th scope="row">Area</th>
            <td>
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <th scope="row">Borders</th>
            <td>
              <ul>
                {country.borders.map((code) => (
                  <li key={code}>
                    <Link to={`/country/${code}`}>
                      {
                        countries.find((item) => item.alpha3Code === code).name
                          .common
                      }
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
