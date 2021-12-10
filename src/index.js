import React from "react";
import ReactDOM from "react-dom";
import exampleWeatherData from "./exampleWeatherData";
import useDateInfo from "./useDateInfo";
import "./styles.css";

// eslint-disable-next-line no-unused-vars
const dataEndpoint =
  "https://emuentes.github.io/example/weatherForecastData.json";

function App() {
  // eslint-disable-next-line no-unused-vars
  const {
    date, // JS date object
    dayOfWeekName, // example: "Thursday"
    dayOfMonthNum, // example: "28"
    monthName, // example: "February"
    hours, // example: "15" -- Note: format is 24hr time so "15" is 3pm;
    minutes, // example: "05"
    seconds, // example: "02"
    formattedTime // 15:05:00
  } = useDateInfo(exampleWeatherData.timestamp);

  return (
    <div className="App">
      <h1>Hello Candidate!</h1>
      <h2>Our Goal:</h2>
      <img
        alt="weather forecast example"
        src="https://emuentes.github.io/example/weatherWidgetExample.png"
        width="500px"
      />
      <h2>Your Code:</h2>
      add code here
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
