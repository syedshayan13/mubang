import React, { Component } from 'react';
import logo from '../logo.svg';
import axios from 'axios';
//import Map from './map';
import '../App.css';
import MapWithAMarker from './MarkerMap'

import {
  Link
} from 'react-router-dom'



class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      events: []
      }

    this.sendrequest=this.sendrequest.bind(this)
  }

HandleChange=(event)=>{
  
  this.setState({
  artistname:event.target.value
})

}

sendrequest=()=>{
  axios.get("http://api.songkick.com/api/3.0/search/artists.json?query=" + this.state.artistname + "&apikey=M0d1Hijfu5f8q4cc")
    .then(response => {
           console.log(response.data.resultsPage.results.artist[0].id);
           //this.setState({artistid:response.data.resultsPage.results.artist[0].id})
           axios.get("http://api.songkick.com/api/3.0/artists/" + response.data.resultsPage.results.artist[0].id + "/calendar.json?apikey=M0d1Hijfu5f8q4cc")
            .then(response => {
                   console.log(response.data.resultsPage.results.event);
                   this.setState({events:response.data.resultsPage.results.event})
                  })
                  .catch((error) => {
                    console.log('error ' + error);
                  });
                  })
          .catch((error) => {
            console.log('error ' + error);
          });

}
  

  render() {

      const city = this.state.events.map((e,i)=>{
          const str = e.venue.displayName.replace(/\s/g, '');
      return (
        <div key={i}>
            
            <Link  
            to={{
                pathname:`/${str}/details`,
                state:{data:e}
            }}
            >{e.venue.displayName}
            </Link>
        </div>)
     })
      const startdate = this.state.events.map((e)=>{
      console.log(e.start.date)
     })
    console.log(this.state.events);
    return (
      <div>
        {this.props.routes}
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Here is what trending on MuBang ♫ </h2>
        </div>
        <p className="App-intro">
        <input type="text" name="artistname" onChange={this.HandleChange}/>
        <button onClick={this.sendrequest}>Search box</button>
        
        </p>
      
      </div>
      {city}

      <div style={{width:'100%'}}>
      
      

      </div>
      </div>
    );
  }
}

export default App;
