import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
// import VideoList from './components/VideoList/VideoList';
import React from 'react';

class App extends React.Component {

  render(){
  return (
    <div className="App">
     <Header />
    </div>
  );
}
}

export default App;
