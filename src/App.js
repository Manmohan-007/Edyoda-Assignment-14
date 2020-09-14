import React from 'react';
import './App.css';

import Topbar from "./Components/Topbar/Topbar";
import Footer from "./Components/Footer/Footer";
import Account_Pages from './Pages/Accounts_Page'

class App extends React.Component {
  state = {

  }


  render() {
    return (
        <div className="App">
          <Topbar />
          <Account_Pages />
          <Footer />
        </div>
    );
  }
}

export default App;
