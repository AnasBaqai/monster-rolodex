import './App.css';
import { Component } from 'react';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
class App extends Component {

  constructor() {
    super()
    this.state = {
      Monsters: [],
      searchTerm: '',
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => this.setState(() => {
        return {
          Monsters: json,
        }
      },
        () => console.log(this.state),
      )
      );

  }

  onSearchChange = (e) => {

    this.setState({ searchTerm: e.target.value })
  }
  render() {
    const { Monsters, searchTerm } = this.state;
    const { onSearchChange } = this;


    return (
      <div className="App">
      <h1 className='app-heading'>Monsters Rolodex </h1>
        <SearchBar onSearchChange={onSearchChange} />
        <CardList Monsters={Monsters} searchTerm={searchTerm} />

      </div>
    )
  }

}

export default App;
