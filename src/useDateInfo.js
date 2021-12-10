export default function useDateInfo(unix_timestamp) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(unix_timestamp * 1000);
  // month part from the timestamp
  var monthName = months[date.getMonth()];
  // dayOfWeekName part from the timestamp
  var dayOfWeekName = days[date.getDay()];
  // dateNum number part from the timestamp
  var dayOfMonthNum = date.getDate();
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = (date.getMinutes() > 9
    ? date.getMinutes()
    : "0" + date.getMinutes()
  ).toString();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return {
    date,
    dayOfWeekName,
    dayOfMonthNum,
    monthName,
    hours,
    minutes,
    seconds,
    formattedTime
  };
}
/*
    // *** Properties returned by "dateInfo" ***
    1) dateInfo.dayOfWeekName
       -- example: "Thursday"
    2) dateInfo.dayOfMonthNum
       -- example: "28"
    3) dateInfo.hours
       -- example: "15"
       -- Note: format is 24hr time so "15" is 3pm;
    4) dateInfo.minutes
       -- example: "05"
    5) dateInfo.monthName
       -- example: "February"
  */
