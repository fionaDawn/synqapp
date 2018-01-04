import React, {Component} from 'react';
import SynqGallery from './components/SynqGallery'
import SynqUploadButton from './components/SynqUploadButton'

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {config} from './config';

import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';

const apiUrl = config.apiUrl;

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#43bfa7",
    accent1Color: "#f78760"
  }
});

const store = configureStore();

class App extends Component {
  render() {
    return (<Provider store={store}>
      <div className="App">
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <AppBar showMenuIconButton={false} title="Synq Upload"/>
<<<<<<< HEAD
            <SynqUploadButton apiUrl={apiUrl} uploaderUrl={config.uploaderUrl} token={config.apiToken}/>
=======
            <SynqUploadButton apiUrl={apiUrl} uploaderUrl={config.uploaderUrl}/>
>>>>>>> refs/remotes/origin/master
            <SynqGallery apiUrl={apiUrl}/>
          </div>
        </MuiThemeProvider>
      </div>
    </Provider>);
  }
}

export default App;
