import React from 'react';
import DisplayLogo from './components/logo/logo';
import UserInput from './components/user-input/UserInput';
import Week from './components/week/Week';
import SelectedDay from './components/selected-day/SelectedDay';

class App extends React.Component {
   
   constructor(props) {
     super(props)

     this.state = {
       error: null,
       isLoaded: true,
       weatherData: []
     }
   }

  getWeather = async () => {
    this.setState({isLoaded: false});
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6fead75e9843435176088c9bbd766d79", { mode: 'no-cors'});
    const weatherData = await response;
    this.setState({
        isLoaded: true,
        weatherData: weatherData
        })
   console.log(this.state.weatherData);
  }

  render() {
    return (
        <div className="App">
          <DisplayLogo />
          <UserInput getWeather={this.getWeather} />
          {this.state.isLoaded ? (<Week/>) : (<div>Loading...</div>)}
          <SelectedDay />
        </div>
      );
  }

}

export default App;
