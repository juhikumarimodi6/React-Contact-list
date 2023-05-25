import React from "react";
import Header from "./Components/Header";
import SearchFilter from "./Components/SearchFilter";
import ContactList from "./Components/ContactList";
import Next from "./Components/Next";
import './App.css'

function App() {

  const [results, setResults] = React.useState([]);
  const [nameSearch, setNameSearch] = React.useState("")
  const [next, setNext] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const getUsers = async () => {
    //use try and catch. It helps to understand if any error happens while making api call.
    // always use async and await while making api call.
    try {
      setLoading(true);
      //results can be set to 100 or any other number. Here 10 indicates max 10 user 
      // data will be fetched at a time.
      const response = await fetch('https://randomuser.me/api/?results=10');
      // const response = await fetch('https://randomuser.me/api/?results=10');
      setResults([]);
      const data = await response.json();
      setResults(data.results)
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }

  //using useEffect with [dependency]. Always use useEffect when api call is made. 
  //any chhange made in dependency array will execute the code written inside useEffect.
  React.useEffect(() => {
    //reset the data and then after the new data is fetched, set data again. 
    //This helps in refreshing the page and data completely.
    getUsers();
  }, [next])

  return (
    <div className="app-container">
        <Header />
        <SearchFilter 
          setNameSearch = {setNameSearch}
        />
        <ContactList 
          results = {results}
          nameSearch = {nameSearch}
          loading = {loading}
          error = {error}
        />
        <Next 
          next = {next}
          setNext={setNext}
        />
    </div>
  );
}

export default App;
