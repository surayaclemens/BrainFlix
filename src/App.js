import { BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import './App.scss'
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
// import Hero from './components/Hero/Hero';

const apiKey="?api_key=cdff3da8-3977-4bd0-85aa-9be24d0a1367";


class App extends React.Component {


  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/"  exact component={HomePage} />
            <Route path="/video/:videoID" component={HomePage} />
            <Route path="/upload" component={UploadPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
