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

  const getUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10')
    // const response = await fetch('https://randomuser.me/api/?results=200')
    const data = await response.json();
    setResults(data.results)
  }

  React.useEffect(() => {
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
        />
        <Next 
          next = {next}
          setNext={setNext}
        />
    </div>
  );
}

export default App;
