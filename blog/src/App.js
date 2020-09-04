import React from 'react';
import Navibar from './components/Navibar';
import { Route, BrowserRouter,Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import deniz from './components/deniz';
import Watches from './components/Watches';
import Rings from './components/Rings';
import Necklaces from './components/Necklaces';
import Bracelets from './components/Bracelets';
import uyelik from './components/uyelik';
import deneme from './components/deneme';
import SearchResults from './components/SearchResults';



function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Navibar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/deniz" component={deniz}/>
            <Route path="/watches" component={Watches}/>
            <Route path="/rings" component={Rings}/>
            <Route path="/Necklaces" component={Necklaces}/>
            <Route path="/Bracelets" component={Bracelets}/>
            <Route path="/uyelik" component={uyelik}/>
            <Route path="/deneme" component={deneme}/>
            <Route path="/results" component={SearchResults}/>
            <Route path="/:post_id" component={Post}/>
            
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
