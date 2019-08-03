import React, {Component} from 'react';
import { connect } from 'react-redux';

class Calendar extends Component {
    
    state={
        newTripTimes: {
            name: '',
            tripStart: '',
            tripEnd: '',
        }
    }
    //Fetch precreated DB List
    componentDidMount(){
        this.props.dispatch({type:'FETCH_LIST'});
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.disptach({type:'ADD_DATE', payload: this.state.newTripTimes}); // need to create a post to DB.
        console.log('clicked submit', this.state.newTripTimes)
    }


    handleChange = (event, propToChange) =>{
        this.setState = ({
            newTripTimes:{
                ...this.state.newTripTimes,
                [propToChange]: event.target.value,
            }
        })
    }

render() {
  return (
    <div>
        {JSON.stringify(this.state.event)}
      <form onSubmit={this.handleSubmit}>
          <label>Start Date:</label>   
      <input type="date" id="start" name="trip-start"
       onChange={(event) => this.handleChange(event, 'tripStart')} />
       <label>End Date:</label>
       <input type="date" id="end" name="trip-end" 
       onChange={(event) => this.handleChange(event, 'tripEnd')}
       />
       <label>Name:</label>
       <input type="text" name="name"></input> 
          <button>Submit</button>
      </form>
      <p>hello</p>
      <div>
          {this.props.reduxStore.getTrip.map( item =>
            <>
           {item.start_date}
           {item.end_date}
           {item.name}
            <style type="text/css">
            </style>
            <table class="tg" key={item.id}>
            <tr>
            <th class="tg-0pky"></th>
            </tr>
            </table>
            </>
            
            )}
      </div>
    </div>
  );
}
}

const putReduxStoreOnProps = (reduxStore) =>({
    reduxStore
  })

export default connect(putReduxStoreOnProps)(Calendar);