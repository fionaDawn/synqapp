import React, {Component} from 'react';
import SynqUploadIndex from './SynqUploadIndex'
import './App.css';

import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#43bfa7",
    accent1Color: "#f78760"
  }
});

class App extends Component {
  render() {
    return (<div className="App">
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <SynqUploadIndex/>
        </div>
      </MuiThemeProvider>
    </div>);
  }
}

export default App;
