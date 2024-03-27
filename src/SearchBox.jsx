/* eslint-disable no-useless-catch */
/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
export default function SearchBox({ updateinfo }) {
  let [city, setcity] = useState("");
  let [error, seterror] = useState(false);
  const API_URl = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b035a28f972c6527e711ae3b71503b40";

  let getweatherinfo = async () => {
    try {
      let response = await fetch(
        `${API_URl}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonresponse = await response.json();
      let result = {
        city: city,
        temp: jsonresponse.main.temp,
        temp_max: jsonresponse.main.temp_max,
        temp_min: jsonresponse.main.temp_min,
        humidity: jsonresponse.main.humidity,
        weather: jsonresponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handlecity = (e) => {
    setcity(e.target.value);
  };

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setcity("");
      let information = await getweatherinfo();
      updateinfo(information);
    } catch (err) {
      seterror(true);
    }
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handlecity}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such Place Exist</p>}
      </form>
    </div>
  );
}
