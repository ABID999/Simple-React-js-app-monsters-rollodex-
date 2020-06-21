import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField :''
    };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  render(){
    const { monsters , searchField } = this.state;
    const filteredMonster = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="Search monsters"
          handleChange = {(e)=> this.setState({ searchField: e.target.value}, ()=>
          console.log(this.state))} 
        />
        <CardList monsters = {filteredMonster} />
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello <code>I am React</code> .
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
