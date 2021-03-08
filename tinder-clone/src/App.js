import './App.css';
//Load components to the landing page
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import Chats from './Chats'
import ChatScreen from './ChatScreen'
import {BrowserRouter as Router , Switch, Route} from "react-router-dom"

//if chat icon is clicked a prop - named backButton is passed with header and the account icon is replaced with backIcon
function App() {
  return (
    //BEM Naming Convention
    <div className="App">      
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chats" />
            <ChatScreen/>
          </Route>
          <Route path="/chats">
            <Header backButton="/"/>         
            <Chats/>
          </Route>
          <Route path="/">
            <Header/>  
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
