import React, {Component} from 'react';


class Calendar extends Component {
render() {
  return (
    <div>
      <form>
          <label>Start Date:</label>
      <input type="date" id="start" name="trip-start"
       />
       <label>End Date:</label>
       <input type="date" id="end" name="trip-end"
       />
          <button>Submit</button>
      </form>
    </div>
  );
}
}

export default Calendar;