import React, {Component} from 'react';
import { connect } from 'react-redux';

class Calendar extends Component {
    
    state={
        newTripTimes: {
            tripStart: '',
            tripEnd: '',
        }
    }
    //Fetch precreated DB List
    componentDidMount(){
        this.props.dispatch({type:'FETCH_LIST'});
    }

    handleSubmit = (event) =>{
        //this.props.disptach({}); // need to create a post to DB.
        event.preventDefault();
        console.log('clicked submit')
        
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
          <button>Submit</button>
      </form>
      <p>hello</p>
      <div>
          {this.props.reduxStore.getTrip.map( item =>
            <>
           {item.start_date}
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