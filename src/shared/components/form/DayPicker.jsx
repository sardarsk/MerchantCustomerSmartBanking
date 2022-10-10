import React from "react";
import WeekdayPicker from "react-weekday-picker";
 
export default class DayOfWeekPicker extends React.Component {
 
  render() {
    var modifiers = {
      'weekend': function(weekday) {
        return weekday == 0 || weekday == 6;
      }
    };
    //<WeekdayPicker modifiers={modifiers}/>
    return <WeekdayPicker  className="form__form-group-field" modifiers={modifiers} />
  }
}