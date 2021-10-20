import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/contact'
import Post from './components/post'
import AddPost from './components/addpost'
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//Switch tag stops when link is matched first time//Only one path can be choosen at one time//

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <div className="content">
          <Switch>   
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/posts/:post_id" component={Post}/>
            <Route path='/addpost'>
              <AddPost/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
