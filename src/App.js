import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import React from 'react';
import './App.scss'
import PageHeader from './components/PageHeader/PageHeader';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';

const apiKey="?api_key=cdff3da8-3977-4bd0-85aa-9be24d0a1367";


class App extends React.Component {


  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <PageHeader />
          <Switch>
            <Route path="/"  exact component={HomePage} />
            <Route path="/video/:videoID" component={HomePage} />
            <Route path="/upload" component={UploadPage} />
            {/* <Route path="/upload" exact render={() => (uploadSuccessful ? <Redirect to="/"/> : <UploadPage/>)}/> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
