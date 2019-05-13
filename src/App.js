import React from 'react';
import DisplayLogo from './components/logo/logo';
import UserInput from './components/user-input/UserInput';
import Week from './components/week/Week';
import SelectedDay from './components/selected-day/SelectedDay';

class App extends React.Component {
  
  

  render() {
    return (
        <div className="App">
          <DisplayLogo />
          <UserInput />
          <Week />
          <SelectedDay />
        </div>
      );
  }

}

export default App;
