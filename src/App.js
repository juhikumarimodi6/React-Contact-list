import React from "react";
import Header from "./Components/Header";
import SearchFilter from "./Components/SearchFilter";
import './App.css'

function App() {

  const [results, setResults] = React.useState([])

  const getUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=200')
    const data = await response.json();
    setResults(data.results)
  }

  React.useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="app-container">
      <Header />
      <SearchFilter 
        results = {results}
      />
    </div>
  );
}

export default App;
