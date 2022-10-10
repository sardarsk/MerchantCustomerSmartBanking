import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DatePickerField = ({ onChange }) => {
  var day_buffer = {
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false
  };
  const [day, setDay] = useState(day_buffer);

  const mon_buffer = (event) => {
    if(day.mon) day.mon = false;
    else day.mon = true;
    setDay(day);
    window.alert(event.target.value+" "+JSON.stringify(day));
  };
  const tue_buffer = (event) => {
    if(day.tue) day.tue = false;
    else day.tue = true;
    window.alert(event.target.value+" "+day.tue);
    setDay(day);
  };
  const wed_buffer = (event) => {
    if(day.wed) day.wed = false;
    else day.wed = true;
    window.alert(event.target.value+" "+day.wed);
    setDay(day);
  };
  const thu_buffer = (event) => {
    if(day.thu) day.thu = false;
    else day.thu = true;
    window.alert(event.target.value+" "+day.thu);
    setDay(day);
  };
  const fri_buffer = (event) => {
    if(day.fri) day.fri = false;
    else day.fri = true;
    window.alert(event.target.value+" "+day.fri);
    setDay(day);
  };
  const sat_buffer = (event) => {
    if(day.sat) day.sat = false;
    else day.sat = true;
    window.alert(event.target.value+" "+day.sat);
    setDay(day);
  };
  const sun_buffer = (event) => {
    if(day.sun) day.sun = false;
    else day.sun = true;
    window.alert(event.target.value+" "+day.sun);
    setDay(day);
  };

  return (
    <div class="weekDays-selector">
      <input type="checkbox" onChange={mon_buffer} id="weekday-mon" class="weekday" />
      <label for="weekday-mon">Mon</label>
      <input type="checkbox" onChange={tue_buffer} id="weekday-tue" class="weekday" />
      <label for="weekday-tue">Tue</label>
      <input type="checkbox" onChange={wed_buffer} id="weekday-wed" class="weekday" />
      <label for="weekday-wed">Wed</label>
      <input type="checkbox" onChange={thu_buffer} id="weekday-thu" class="weekday" />
      <label for="weekday-thu">Thu</label>
      <input type="checkbox" onChange={fri_buffer} id="weekday-fri" class="weekday" />
      <label for="weekday-fri">Fri</label>
      <input type="checkbox" onChange={sat_buffer} id="weekday-sat" class="weekday" />
      <label for="weekday-sat">Sat</label>
      <input type="checkbox" onChange={sun_buffer} id="weekday-sun" class="weekday" />
      <label for="weekday-sun">Sun</label>
    </div>
  );
};

DatePickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
};

const renderDayPickerField = ({ input }) => <DatePickerField {...input} />;

renderDayPickerField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
};

export default renderDayPickerField;
