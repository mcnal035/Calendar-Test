import React, {Component} from 'react';
import { connect } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Calendar from 'react-calendar';



class CalendarList extends Component {
    
    state = {
        newTripTime: {
            startDate: '', //new Date()
            endDate:  [new Date('')],
            name: '',
        }
    }
    //Fetch precreated DB List
    componentDidMount(){
        this.props.dispatch({type:'FETCH_LIST'});
    }

    handleChange = (event, propertyName) =>{
        console.log('entered date',  event.target.value);
        this.setDate = ({
            newTripTime: {
                 ...this.state.newTripTime,
                [propertyName]: event.target.value,
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type:'ADD_DATE', payload: this.state.newTripTime}); // need to create a post to DB. 
    }

render() {
  return (
    <div>
        {JSON.stringify(this.state)}
      <form onSubmit={this.handleSubmit}>
          <label>Start Date:</label>   
      <input type="date" min="2018-08-04" max="2020-04-02" 
       onChange={(event) => this.handleChange(event, 'startDate')} />
       <label>End Date:</label>
       <input type="date"  
       onChange={(event) => this.handleChange(event, 'endDate')}
       />
       <label>Name:</label>
       <input type="text" 
       onChange={(event) => this.handleChange(event, 'name')}/> 
          <button type="submit">Submit</button>
      </form>
      <p>Calendar and dates</p>
      <Calendar
                    locale="eng"
                    returnValue="range"
                    selectRange={true}
                /><br/>
      <div>
          {this.props.reduxStore.getTrip.map( item =>
            <>
            <TableRow key={item.id} value={item.id}>
                <TableCell>Reserved:<br/> <br/>` {item.name} <br/></TableCell> 
                <TableCell>Start: {item.start_date.substring(5, 7)+ "/" + item.start_date.substring(8,10)+ "/" + item.start_date.substring(0,4)}<br/></TableCell>
                <TableCell>End: {item.end_date.substring(5, 7)+ "/" + item.end_date.substring(8,10)+ "/" + item.end_date.substring(0,4)} <br/></TableCell>
           </TableRow>
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

export default connect(putReduxStoreOnProps)(CalendarList);