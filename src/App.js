import React from 'react';
import MakeUpItems from './MakeUpItems';
import AppHeader from './AppHeader';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { MakeUpProvider } from './main/MakeUpContext';
import MakeUpItemsSearch from './MakeUpItemsSearch';
const App = () => {
  // const [counter, setCounter] = useState(0);
  // const [makeUpItems, setMakeUpItems] = useState([]);
  // const [search, setSearch] = useState('');
  // const [query, setQuery] = useState('');
  // useEffect(() => {
  //   //console.log('Effect has been run');
  //   getMakeupItems();
  // }, [query]);
  // const getMakeupItems = async () => {
  //   const query_string = 'http://makeup-api.herokuapp.com/api/v1/products.json' + query;
  //   console.log(query_string);
  //   const response = await fetch(query_string)
  //   const data = await response.json();
  //   console.log(data);
  //   setMakeUpItems(data);
  // }
  //   const updateSearch = e => {
  //     setSearch(e.target.value);
  //   }
  //   const getSearch = e => {
  //     e.preventDefault();
  //     setQuery('?brand=' + search);
  //     console.log(query);
  //     setSearch('');
  //   }
  return (
    <Router>
      <MakeUpProvider >
        <div className="App" >
        <AppHeader />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={MakeUpItemsSearch} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
          {/* <div className="makeUpItems" >
            <MakeUpItems />
          </div> */}
        </div>
      </MakeUpProvider>
    </Router>
  );
}
const Home = () => (

  

    <div className="makeUpItems" >
      <MakeUpItems />
    </div>
);
export default App;